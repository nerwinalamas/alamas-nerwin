import Comment from '../models/Comment.js';
import Blog from '../models/Blog.js';

// Add a Comment
const addComment = async (req, res) => {
    // TODO: Implement the functionality to add a comment to a blog post
    try {
        const { text, blogId } = req.body;

        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }

        console.log("blog:", blog)

        const comment = await Comment.create({
            text,
            blog: blogId,
            user: req.user._id,
        });
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Get Comments for a Blog
const getCommentsByBlog = async (req, res) => {
    // TODO: Implement the functionality to retrieve comments for a specific blog post
    try {
        const { blogId } = req.params;

        const comments = await Comment.find({ blog: blogId });
        if (!comments) {
            return res.status(404).json({ error: "Comments not found" });
        }
        res.status(201).json(comments);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Delete a Comment
const deleteComment = async (req, res) => {
    // TODO: Implement the functionality to delete a specific comment
    try {
        const { id } = req.params;

        const comment = await Comment.findById(id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }

        if (comment.user.toString() !== req.user._id)
            return res.status(403).json({ error: "Not authorized" });

        await comment.deleteOne();
        res.status(200).json({ message: "Comment deleted" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

export { addComment, getCommentsByBlog, deleteComment };