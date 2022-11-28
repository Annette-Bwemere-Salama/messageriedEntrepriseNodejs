import mongoose from 'mongoose';


const MessageSchema = new mongoose.Schema({
   receiverId: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
   }, 
   senderId:{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
   },
   text: {
       type: String,
   },
},{ timestamps: true},
);  

export default mongoose.model("Message", MessageSchema); 