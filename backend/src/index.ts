import express, { Express, NextFunction, Response, Request} from 'express';
import passport from 'passport';
import  dotenv from 'dotenv';
import mongoose , {Error, ConnectOptions} from 'mongoose';
import multer from "multer";
import path from 'path';
import helmet from 'helmet';
import morgan from 'morgan';
// import multer from 'multer';
import  {getRegister, getLogin} from "./routes/auth"
import {v2 as cloudinary} from "cloudinary"

import fs from "fs"
// import {upload} from "./upload/multer"
import bodyParser from "body-parser"
// import multer from 'multer';
// const app: Express = express()



 dotenv.config();
 
 const  URI = process.env.MONGODB_URI;

 mongoose.connect(URI!,{
     useNewUrlParser: true,
     useUnifiedTopology: true,
   } as ConnectOptions, (err: Error)=>{
        if (err){
         console.log(err)
         process.exit(1)
        }
         console.log("Connection fait avec succes chez mongodbdatabase ");
     }) 
   
  // midlewere


const app: express.Express = express();
app.use(express.json())
app.use(helmet());
app.use(morgan("common"))



console.log(process.env);
//  const  storage = multer.diskStorage({
//   destination: (_req, _file, cb) =>{
//     cb(null, "public/images")
//   },
//   filename: (req, _file, cb)=> {
//     cb(null, new Date().toISOString + '-' +
//     //  _file.originalname, 
//      req.body.name);
//   }
// });


// const upload = multer({
//   dest: "/api/upload"
// });
// const type = upload.single('recfile');

// app.post("/api/upload", type, ((req,res)=>{
//      const tmp_path = req.file!.path;
//   const target_path = 'uploads/' + req.file!.originalname;

//   const src = fs.createReadStream(tmp_path);
//   const dest = fs.createWriteStream(target_path);
//   src.pipe(dest);
//   src.on("end", (()=>{
//     res.json("complete")
//   })).on("error", (()=>{
//     res.json("error")
//   }))
// }))

app.post("/register",getRegister)
app.post("/login", getLogin)

app.get("/images", express.static(path.join(__dirname, "./public/images")));




const port = process.env.PORT


app.listen(4001, () => {
    console.log(`[server]: Server is runnning at https : anny  localhost: ${port}`);
})