import mongoose from 'mongoose';

const CommentSchema = mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, { timestamps: true });

const CommentModel = mongoose.model("Comment", CommentSchema);
export default CommentModel;
