const { Schema, model } = require('mongoose');
// Schema to create a comment model
const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    babysitter: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
   
  },
  {
    
    timestamps: true,
    id: true,
  }
);

const Comment = model('comment', commentSchema);

module.exports = Comment;