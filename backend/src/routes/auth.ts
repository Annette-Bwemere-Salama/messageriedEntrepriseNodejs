
import bscrypt from 'bcryptjs';
import User  from '../models/User';
import router from "express"
import  {  Request, Response} from 'express';
import Message from "../models/Message"



router.Router();
 
export const getRegister = async (req: Request, res: Response) =>{
  console.log(req.body);
  
  try {
    
    //generer u nouveau password
    const salt = await bscrypt.genSalt(10);
    const hashedPassword = await bscrypt.hashSync(req.body.password, salt);
 
 //creer un nouvelle utilisateur
    const   newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //enregister user et reponse
    const user = await newUser.save();
    res.status(200).json(user);
  }catch (err) {
    res.status(500).json(err)
  }
};

export const getLogin = async (req : Request, res: Response) =>{
  try {
    const user = await User.findOne({email: req.body.email});
    if(!user) res.status(404).json("user not found");
    else {

      const validPassword = await bscrypt.compare(req.body.password, user?.password! );
      !validPassword && res.status(400).json("wrong passwor   mot de pass invalid")
      
      res.status(200).json(user)
    }
  } catch (err) {
    res.status(500).json(err)
  }
}



export const getAllusers = async (req: Request, res: Response)=>{
  try {
    const users = await User.find()
    res.status(200).json( users);
  } catch (error) {
    console.log(error);
    res.status(500).json( error);
  }
}

export const addMessage = async (req : Request, res: Response) =>{
  const {receiverId, text, senderId} = req.body
  const newMessage = new Message({
   receiverId, text, senderId
  })
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage)
  } catch (error) {
    res.status(500).json(error)
    
  }
}



export const allMessageId = async (req : Request, res: Response) =>{
    try {
      const messages = await Message.find({
        $or : [
          {receiverId:{ $in : [req.query.senderId, req.query.receiverId ]}},
          {senderId:{ $in : [req.query.senderId, req.query.receiverId ]}}]});
       res.status(200).json(messages)
       console.log(messages);
    } catch (error) {
      res.status(500).json
      console.log(error);
    }
}







//new conversation



//get conve of a user



// // export const getRegister = async (req: Request, res: Response) => {}

// export  const isAdministratorMiddleware = (req: Request, res: Response, next: NextFunction) =>{
//    const {user} : any = req;
//    if (user) {
//      User.findOne({ username: user.username}, (err: Error, doc:  DatabaseUserInterface) =>{
//        if (err) throw err;
//        if (doc?.isAdmin){
//          next ()
//        }
//        else{
//          res.send("Désolé, seuls les administrateurs peuvent effectuer cette opération.")
//        }
//      })
//      }
//      else{
//        res.send("Désolé, vous n'êtes pas connecté.")
//      }
//    }



//  export const getLogout = (req: { logout: (arg0: (err: any) => any) => void; },res: { redirect: (arg0: string) => void; send: (arg0: string) => void; }, next: (arg0: any) => any)=>{
//    req.logout(function(err){
//      if (err) {return next (err);}
//      res.redirect('/login')
//    });
//    res.send("success")
//  };

 
//  export const postDeleteUser =async (req: Request, res: Response) =>{
//    const {id} = req.body;
//    await User.findByIdAndDelete(id, (err: Error) =>{
//      if (err)throw err;
//    });
//    res.send("sucess")
//  }

    
//  export const getAllusers = async (res : Response)=>{
//    await  User.find({}, (err : Error,  data : DatabaseUserInterface[])=>{
//      if(err) throw err;
//      const filterdUsers: UserInterface[] = [];
//      data.forEach((item : DatabaseUserInterface) =>{
//        const userInformation = {
//          id: item._id,
//          username: item.username,
//          isAdmin: item.isAdmin
//        }
//        filterdUsers.push(userInformation);
//    });
//    res.send(filterdUsers);
//  })
//  }

