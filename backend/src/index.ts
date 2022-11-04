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
    // useCreateIndex: true,
    // useFindAndModify: false,
  } as ConnectOptions, (err: Error)=>{
       if (err){
        console.log(err)
        process.exit(1)
       }
        console.log("Connection fait avec succes chez mongodbdatabase  ");
        
    }) ;
   
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://<username>:<password>@cluster0.e6najmy.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });






// const app: Express = express();
// app.use(express.json())
//     .use(cors({origin: "http://localhost:3000", credentials: true}))
//       .use(
//     session({
//         secret: "secretcode",
//         resave: true,
//         saveUninitialized: true,
//     })
// );

// app.use(cookieParser())
//     .use(passport.initialize())
//     .use(passport.session());
// const port = process.env.PORT


// app.post('/register', async (req: Request, res: Response) => {
//     // res.send('Salut tous les mondes')
//     const hashedPassword = await bscrypt.hash(req.body.passport, 10);
//     const newUser = new User({
//         username: req.body.username,
//         password: hashedPassword
//     });
//     await newUser.save();
//     res.send("Fait avec succes connection utilisateur Annette")
// });

// app.listen(port, () => {
//     console.log(`[server]: Server is runnning at https : localhost: ${port}`);
// })