
import bscrypt from 'bcryptjs';
import User  from '../User';
import  {  Request, Response} from 'express';
import {DatabaseUserInterface } from "../interfaces/UserInterface";
 
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
 


    

