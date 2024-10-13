const mongoose = require('mongoose');

const convSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const converstaion = mongoose.model('conversation', convSchema);
module.exports = converstaion;
