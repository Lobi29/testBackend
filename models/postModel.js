import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isBookmarked: {
        type: Boolean,
        default: false  // Default value for isBookmarked is false
    }
}, { timestamps: true });

const PostModel = mongoose.model("Post", PostSchema);
export default PostModel;
