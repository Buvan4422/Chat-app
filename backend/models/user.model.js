const mongoose = require('mongoose');

const userScheme = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: 'true',
    },
    userName: {
      type: String,
      required: 'true',
      unique: 'true',
    },
    password: {
      type: String,
      required: 'true',
      minLength: 6,
    },
    gender: {
      type: String,
      required: 'true',
      enum: ['male', 'female'],
    },
    profilepic: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

const user = mongoose.model('user', userScheme);

module.exports = user;
