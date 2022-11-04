import mongoose , {Error, ConnectOptions} from 'mongoose';
import express, { Express, Request, Response} from 'express';
import bscrypt from 'bcryptjs';
import session from 'express-session';
import cookieParser from 'cookie-parser'; 
import cors from 'cors' ;
import passport from 'passport';
import User  from './User';
import  dotenv from 'dotenv';

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

const port = process.env.PORT

console.log(port);

app.post('/register', async (req: Request, res: Response) => {
    // res.send('Salut tous les mondes')
    const hashedPassword = await bscrypt.hash(req.body.password, 10);
    const newUser = new User({
        username: req.body.username,
        password: hashedPassword
    });
 await newUser.save();
    res.send("Fait avec succes connection utilisateur Annette")
});

app.listen(4000, () => {
    console.log(`[server]: Server is runnning at https : anny  localhost: ${port}`);
})