import express, { Express} from 'express';
import bscrypt from 'bcryptjs';
import session from 'express-session';
import cookieParser from 'cookie-parser'; 
import passportLocal from 'passport-local';
import cors from 'cors' ;
import passport from 'passport';
import User  from './User';
import  dotenv from 'dotenv';
import {UserInterface, DatabaseUserInterface} from "./interfaces/UserInterface";
import {getRegister, getLogout, postDeleteUser, getAllusers} from "../src/routes/register"
import {mongodbConnection} from "./controllers/Database"
 const LocalStrategy = passportLocal.Strategy;
 dotenv.config();




mongodbConnection;
   
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


//routes
app.post('/register',getRegister)


app.post("/login", passport.authenticate("local"), (req, res) => {
  res.send("success")
});

app.get("/user", (req,res)=>{
  res.send(req.user);
});

app.get("/logout", getLogout)

app.post("/deleteuser",postDeleteUser);


app.get("/getallusers", getAllusers);


app.listen(4001, () => {
    console.log(`[server]: Server is runnning at https : anny  localhost: ${port}`);
})