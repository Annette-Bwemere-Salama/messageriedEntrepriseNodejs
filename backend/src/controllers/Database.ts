
import mongoose , {Error, ConnectOptions} from 'mongoose';
import  dotenv from 'dotenv';
dotenv.config();

const  URI = process.env.MONGODB_URI;

export const mongodbConnection =  mongoose.connect(URI!,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions, (err: Error)=>{
       if (err){
        console.log(err)
        process.exit(1)
       }
        console.log("Connection fait avec succes chez mongodbdatabase ");
        
    }) ;