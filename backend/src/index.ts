import mongoose , {Error, ConnectOptions} from 'mongoose';
import express, { Express, NextFunction, Request, Response} from 'express';
import bscrypt from 'bcryptjs';
import session from 'express-session';
import cookieParser from 'cookie-parser'; 
import passportLocal from 'passport-local';
import cors from 'cors' ;
import passport from 'passport';
import User  from './User';
import  dotenv from 'dotenv';
import {UserInterface, DatabaseUserInterface} from "./interfaces/UserInterface";
import {getRegister} from "../src/routes/register"

 const LocalStrategy = passportLocal.Strategy;
 dotenv.config();


const  URI = process.env.MONGODB_URI;

console.log(URI)

 mongoose.connect(URI!,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions, (err: Error)=>{
       if (err){
        console.log(err)
        process.exit(1)
       }
        console.log("Connection fait avec succes chez mongodbdatabase ");
        
    }) ;

   
  // midlewere
const app: Express = express();
app.use(express.json())
    .use(cors({origin: "http://localhost:5173", credentials: true}))
      .use(
    session({
        secret: "secretcode",
        resave: true,
        saveUninitialized: true,
    })
);

app.use(cookieParser())
    .use(passport.initialize())
    .use(passport.session());

//passport
passport.use(new  LocalStrategy((username: string, password: string, done)=>{
  User.findOne({ username: username}, (err : any, user : DatabaseUserInterface)=>{
    if (err) throw err;
    if (!user) return done(null,false);
    bscrypt.compare(password, user.password, (err, result: boolean)=>{
      if(err) throw err;
      if(result === true){
        return done (null, user);
      }else {
        return done(null, false);
      }
    });
  });
})
);


passport.serializeUser((user : DatabaseUserInterface, cb)=>{
  cb(null,user._id);
});


passport.deserializeUser((id: string, cb)=>{
  User.findOne({_id: id}, (err: any, user : DatabaseUserInterface) =>{
    const userInformation : UserInterface = {
     username : user.username,
      isAdmin: user.isAdmin,
      id: user._id
    };
    cb(err, userInformation);
});
});


const port = process.env.PORT
// app.post('/register', registerController.register());

app.post('/register',getRegister)gi



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

app.post("/login", passport.authenticate("local"), (_, res) => {
  res.send("success")
});

app.get("/user", (req,res)=>{
  res.send(req.user);
});

app.get("/logout", (req,res, next)=>{
  req.logout(function(err){
    if (err) {return next (err);}
    res.redirect('/login')
  });
  res.send("success")
});

app.post("/deleteuser",isAdministratorMiddleware, async (req, res) =>{
  const {id} = req.body;
  await User.findByIdAndDelete(id, (err: Error) =>{
    if (err)throw err;
  });
  res.send("sucess")
});


app.get("/getallusers", isAdministratorMiddleware, async (_, res)=>{
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
});

// app.use(errorControler.get404);

app.listen(4001, () => {
    console.log(`[server]: Server is runnning at https : anny  localhost: ${port}`);
})