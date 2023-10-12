import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import {
  createPost,
  getPosts,
  getPost,
  getUserPost,
  getComments,
  likePost,
  likePostComment,
  commentPost,
  replyPostComment,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

//create Post
router.post("/create-post", userAuth, createPost);

//get post
router.post("/", userAuth, getPosts);
router.post("/:id", userAuth, getPost);

router.post("/get-user-post/:id", userAuth, getUserPost);

//get comments
router.get("/comments/:postId", getComments);

//likes and comment posts
router.post("/like/:id", userAuth, likePost);
router.post("/like-comment/:id/:rid?", userAuth, likePostComment);
router.post("/comment/:id", userAuth, commentPost);
router.post("/reply-comment/:id", userAuth, replyPostComment);

//delete post
router.delete("/:id", userAuth, deletePost);

export default router;
