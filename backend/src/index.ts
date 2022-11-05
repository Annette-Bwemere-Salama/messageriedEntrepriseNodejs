import mongoose , {Error, ConnectOptions} from 'mongoose';
import express, { Express, Request, Response} from 'express';
import bscrypt from 'bcryptjs';
import session from 'express-session';
import cookieParser from 'cookie-parser'; 
import cors from 'cors' ;
import passport from 'passport';
import User  from './User';
import  dotenv from 'dotenv';
import {UserInterface} from "./interfaces/Userinterfaces";
// import {LocalStrategy} from 'passport-local';
// import LocalStrategy from "passport-local";

 const LocalStrategy = passport-local().Strategy;
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
        console.log("Connection fait avec succes chez mongodbdatabase  ");
        
    }) ;

   

  // midlewere
const app: Express = express();
app.use(express.json())
    .use(cors({origin: "http://localhost:3000", credentials: true}))
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
passport.use(new  LocalStrategy((username: any, paassword: string, done: (arg0: null, arg1: boolean) => void)=>{
  User.findOne({ username: username}, (err: any, user : any)=>{
    if (err) throw err;
    if (!user) return done(null,false);
    bscrypt.compare(paassword, user.paassword, (err, result)=>{
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


passport.serializeUser((user : any, cb)=>{
  cb(null,user.id);
});


passport.deserializeUser((id: string, cb)=>{
  User.findOne({_id: id}, (err: any, user : any) =>{
    const userInformation = {
      username : user.username,
      isAdmin: user.isAdmin
    };
    cb(err, userInformation);
});
})




const port = process.env.PORT

app.post('/register', async (req: Request, res: Response) => {

   const {username, password} = req?.body;
   if (username || !password || typeof username !== "string" || typeof password !== "string") {
      res.send("N'oublies pas les conténus");
      return;
   }
   User.findOne({ username}, async (err: Error, doc? : UserInterface) =>{
    if (err)throw err;
    if (doc) res.send("User exists déjà veuillez changer")
    if (!doc) {

      const hashedPassword = await bscrypt.hash(password, 10);
      const newUser = new User({
          username,
          password: hashedPassword
      });
   await newUser.save();
      res.send("Fait avec succes connection utilisateur Annette")
       }
  })
});



app.post("/login", passport.authenticate("local", (req, res) => {
  res.send("Autentifier avec succes")
}));


app.get("/user", (req,res)=>{
  res.send(req.user);
})
app.listen(4000, () => {
    console.log(`[server]: Server is runnning at https : anny  localhost: ${port}`);
})

function local() {
  throw new Error('Function not implemented.');
}
