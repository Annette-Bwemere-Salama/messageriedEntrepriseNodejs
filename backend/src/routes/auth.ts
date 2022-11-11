
import bscrypt from 'bcryptjs';
import User  from '../models/User';
import  {  Request, Response} from 'express';

 
export const getRegister = async (req: Request, res: Response) =>{
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
    !user && res.status(404).json("user not found");

    const validPassword = await bscrypt.compare(req.body.password, user?.password : String);
     !validPassword && res.status(400).json("wrong passwor   mot de pass invalid")

     res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
}



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

