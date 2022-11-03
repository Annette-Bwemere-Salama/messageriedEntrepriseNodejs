import mongoose , {Error} from 'mongoose';
import express, { Express, Request, Response} from 'express';
import bscrypt from 'bcryptjs';
import session from 'express-session';
import cookieParser from 'cookie-parser'; 
import cors from 'cors' ;
import passport from 'passport';
import User  from './User';
import  dotenv from 'dotenv';

dotenv.config();

mongoose.
connect(process.env.MONGO_URI,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifielTopology: true
    }, (err: Error)=>{
        if (err) throw err;
        console.log("Connection à la base de données réussie");
        
    });


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


app.post('/register', async (req: Request, res: Response) => {
    // res.send('Salut tous les mondes')
    const hashedPassword = await bscrypt.hash(req.body.passport, 10);
    const newUser = new User({
        username: req.body.username,
        password: hashedPassword
    });
});

app.listen(port, () => {
    console.log(`[server]: Server is runnning at https : localhost: ${port}`);
})