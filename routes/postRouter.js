import express from 'express';
import { createPost, getAllPosts, commentOnPost, deletePost, bookmarkPost, getAllCommentsByPostId } from '../controllers/postController.js';

const router = express.Router();

// Route to create a new post
router.post('/posts', createPost);

// Route to get all posts
router.get('/posts', getAllPosts);

// Route to comment on a post
router.post('/posts/:postId/comment', commentOnPost);

// Route to delete a post
router.delete('/posts/:postId', deletePost);

// Route to bookmark a post
router.post('/posts/:postId/bookmark', bookmarkPost);

// Route to comments of a post
router.get('/posts/:postId/comments', getAllCommentsByPostId);

export default router;
