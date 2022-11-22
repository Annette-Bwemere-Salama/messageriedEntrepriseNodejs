import  {  Request, Response} from 'express';
import Conversation from '../models/Conversation';



export const addMessage = async (req : Request, res: Response) =>{
        const newMessage = new Conversation({
            members: [req.body.senderID, req.body.receiverID]
        });
        try {
            const saveMessage = await newMessage.save();
            res.status(200).json(saveMessage)
        } catch (error) {
            res.status(500).json(error)
        }
       
}     

//new conversation



//get conve of a user