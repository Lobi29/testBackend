import PostModel from "../models/postModel.js";
import CommentModel from "../models/commentModel.js";

// Controller function to create a new post
export const createPost = async (req, res) => {
    try {
        const { category, description } = req.body;
        const post = new PostModel({ category, description });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller function to get all posts
export const getAllPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller function to comment on a post
export const commentOnPost = async (req, res) => {
    try {
        const { postId, comment } = req.body;
        const newComment = new CommentModel({ postId, comment });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller function to get all the comments of a post
export const getAllCommentsByPostId = async (req, res) => {
    try {
        const { postId } = req.params;
        const comments = await CommentModel.find({ postId });
        
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller function to delete a post
export const deletePost = async (req, res) => {
    try {
        const { postId } = req.params;
        await PostModel.findByIdAndDelete(postId);
        await CommentModel.deleteMany({ postId });
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const bookmarkPost = async (req, res) => {
    try {
        const { postId } = req.params;
        const post = await PostModel.findById(postId);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Toggle the isBookmarked field
        post.isBookmarked = !post.isBookmarked;

        await post.save();

        const message = post.isBookmarked ? 'Post bookmarked successfully' : 'Post unmarked successfully';
        res.status(200).json({ message });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};