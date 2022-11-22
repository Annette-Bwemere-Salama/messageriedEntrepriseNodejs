import multer from "multer";
import {v2 as cloudinary} from "cloudinary"




export const  storage = multer.diskStorage({
    destination: (_req, _file, cb) =>{
      cb(null, "public/images")
    },
    filename: (req, _file, cb)=> {
      cb(null, new Date().toISOString + '-' + _file.originalname);
    }
  });
  
//   const filefilter = (_req: Request, file: any, cb:any) =>{
//     if (file.mimetype === "images/jpeg" || file.mimetype === "image/png" ){
//       cb(null, true)
//     } else{
//         cb({message : "Unsuported file format"}, false)
//     } 
//   }
  
  
  export const upload = multer ({
    storage: storage,
    limits :{fileSize: 5120 * 1024},
    // fileFilter: filefilter
  })
  
  module.exports = upload;




cloudinary.config!({
    cloud_name : process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  })
  
  
  exports.uploads = (file: any, folder: any) => {
  
    return new Promise(resolve =>{
      cloudinary.uploader!.upload(file, (result: any) =>{
        resolve({
          url: result.url,
          id: result.public_id
        })
        }
        // , {
        // //   resourcet_ype: "auto",
        // //   folder: folder
        // }
        )
        })
  }