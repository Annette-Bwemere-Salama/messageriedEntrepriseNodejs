import Post from "src/models/Post";
import User from "src/models/User";
import { Request, Response } from "express";
import { request } from "http";

//create post
export const createPost = async (req: Request, res: Response) =>{
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch (err) {
        res.status(500).json(err);
    }
}

// mettre en jours le poste
export const updatePost = async (req: Request, res: Response) =>{
    try{
        const post = await Post.findById(req.params.id);
        if (post?.userId === req.body.userId) {
            await post?.updateOne({ $set: req.body});
            res.status(200).json("the post has been update le post est mis à jour avec succes");
        }else {
            res.status(403).json("we can update only your post,(vous allez mettre en jour seulement votre post)")
        }
    } catch (err) {
        res.status(500).json(err);
    }
}


//supprimer un post

export const deletePost = async (req: Request, res: Response) =>{
    try {
        const post = await Post.findById(req.params.id);
        if (post?.userId === req.body.userId) {
            await post?.deleteOne();
            res.status(200).json("le post est supprimer, the post has been deleted")
        } else {
            res.status(403).json("you can delete only you post,  Vous allez supprimé seulement votre post")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
