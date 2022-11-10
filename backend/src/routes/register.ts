
import bscrypt from 'bcryptjs';
import User  from '../User';
import  {  Request, Response, NextFunction} from 'express';
import {DatabaseUserInterface , UserInterface} from "../interfaces/UserInterface";
// import passport from 'passport';

 
export const getRegister = async (req: Request, res: Response) => {
    const {username, password} = req?.body;
    console.log("username:" + username + "password:" + password);
    
    if (username || !password || typeof username !== "string" || typeof password !== "string") {
     
       res.send("Valeur incorrect");
       return;
    }
    User.findOne({ username}, async (err: Error, doc : DatabaseUserInterface) =>{
     if (err){console.log(err);
     }
     if (doc) res.send("User exists déjà veuillez")
     if (!doc) {
 
       const hashedPassword = await bscrypt.hash(password, 10);
       const newUser = new User({
           username,
           password: hashedPassword,
           // isAdmin: true
       });
    await newUser.save();
       res.send("success")
        }
   })
 }
 

 const isAdministratorMiddleware = (req: Request, res: Response, next: NextFunction) =>{
   const {user} : any = req;
   if (user) {
     User.findOne({ username: user.username}, (err: Error, doc:  DatabaseUserInterface) =>{
       if (err) throw err;
       if (doc?.isAdmin){
         next ()
       }
       else{
         res.send("Désolé, seuls les administrateurs peuvent effectuer cette opération.")
       }
     })
     }
     else{
       res.send("Désolé, vous n'êtes pas connecté.")
     }
   }



 export const getLogout = (req: { logout: (arg0: (err: any) => any) => void; },res: { redirect: (arg0: string) => void; send: (arg0: string) => void; }, next: (arg0: any) => any)=>{
   req.logout(function(err){
     if (err) {return next (err);}
     res.redirect('/login')
   });
   res.send("success")
 };

 
 export const postDeleteUser = isAdministratorMiddleware, async: any (req: { body: { id: any; }; }, res: { send: (arg0: string) => void; }) =>{
   const {id} = req.body;
   await User.findByIdAndDelete(id, (err: Error) =>{
     if (err)throw err;
   });
   res.send("sucess")
 }

    
 export const getAllusers = isAdministratorMiddleware, async : any (res : any)=>{
   await  User.find({}, (err : Error,  data : DatabaseUserInterface[])=>{
     if(err) throw err;
     const filterdUsers: UserInterface[] = [];
     data.forEach((item : DatabaseUserInterface) =>{
       const userInformation = {
         id: item._id,
         username: item.username,
         isAdmin: item.isAdmin
       }
       filterdUsers.push(userInformation);
   });
   res.send(filterdUsers);
 })
 }

