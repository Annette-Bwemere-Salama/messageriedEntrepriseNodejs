// import  {  Request, Response} from 'express';
// import Conversation from '../models/Conversation';



// export const addConversation = async (req : Request, res: Response) =>{
//         const newConversation = new Conversation({
//             members: [req.body.senderID, req.body.receiverID]
//         });
//         try {
//             const savedConversation = await newConversation.save();
//             res.status(200).json(savedConversation)
//         } catch (error) {
//             res.status(500).json(error)
//         }
       
// }     

// //new conversation



// //get conve of a user