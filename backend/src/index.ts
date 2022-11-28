 import express, { } from 'express';
import  dotenv from 'dotenv';
import cors from 'cors'
import mongoose , {Error, ConnectOptions} from 'mongoose';
import  {getRegister, getLogin,  addMessage, 
  allMessageId, 
  getAllusers} from "./routes/auth"
import path from 'path';
import helmet from 'helmet';
import morgan from 'morgan';
import cloudinary from "cloudinary"
cloudinary.v2;


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

        // const io = require("./socket").init(server)
        // io.on("connection", (_socket: any) =>{
        //   console.log("client Connecter socket io");
          
        // })
         console.log("Connection fait avec succes chez mongodbdatabase ");
        

        }) 

   

  // midlewere
  const app = express();

  let http = require("http").Server(app);



  let io = require("socket.io")(http);


app.use(cors())
app.use(express.json())
app.use(helmet());
app.use(morgan("common"))

// cloudinary.config({
//   secure: true
// }) ;   
// console.log(cloudinary.config());


// console.log(process.env);

app.post("/register",getRegister);
app.post("/login", getLogin);
app.get('/users', getAllusers)
app.post('/messenger', addMessage)
app.get('/messenger', allMessageId)


// io.on("connection", (socket: any)=>{
//   console.log("welcom in socketAnnyChat");
//   socket.on("message", (message: any)=>{
//     console.log(message);
    
//   });
//   socket.emit('connection', null);
// });



app.get("/images", express.static(path.join(__dirname, "./public/images")));

const port = process.env.PORT

const server = app.listen(port, () => {
  console.log(`[server]: Server is runnning at https : anny  localhost: ${port}`);
})


// localhost:500/messanger?senderId=34567839405&receiverId=473849358935u8