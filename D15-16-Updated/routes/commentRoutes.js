import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
    addComment,
    deleteComment,
    getCommentsByBlog,
} from "../controllers/commentController.js";

const router = express.Router();

// Routes
router.post("/", authMiddleware, addComment);
router.get("/:blogId", getCommentsByBlog);
router.delete("/:id", authMiddleware, deleteComment);

export default router;
