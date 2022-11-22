 import mongoose from 'mongoose';


 const user = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        min: 3,
        max: 20
    }, 
    email:{
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    profilePicture: {
        type:String,
        default: "",
    },

    isAdmin:{
        type: Boolean,
        default: false
    },
    city: {
        type: String,
        max: 50,
    },
 },{ timestamps: true}
 );  

 export default mongoose.model("User", user); 