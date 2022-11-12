import User from "src/models/User";
import { Request, Response } from "express";
import bcrypt from "bcryptjs"

export const uptdateUser = async (req: Request, res: Response) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSaltSync(10);
                req.body.password = await bcrypt.hashSync(req.body.password, salt)
            } catch (error) {
               return res.status(500).json(error) 
            }
            try {
                const user = await User.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                });
                res.status(200).json("Account has been updted")
            } catch (error) {
                return res.status(500).json(error)
            }
        }else{
            return res.status(403).json("You can update only your account")
        }
    }
}


//supprimer un utilisateur


export const deleteUser =async (req:Request, res: Response) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted")
        } catch (error) {
            return res.status(500).json(error)
        }
    } else {
        return res.status(403).json("You can delete only your account")
    }
}

//get a user


export const seeUser =async (req:Request, res: Response) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
        const user = userId
        ? await User.findById(userId)
        : await User.findOne({ username: username});
        const { passport, updateAt,  ...other} = user?.__v
        res.status(500).json(other)
    } catch (error) {
        
    }
}


//get friends 

// export const getFriends =async (req:Request, res: Response) => {
//     try {
//         const user = await User.findById(req.params.userId);
//         const friends = await Promise.all(
//             user.followings.map((friendId) =>{
//                 return User.findById(friendId)
//             })
//         )
//     } catch (error) {
        
//     }
// }