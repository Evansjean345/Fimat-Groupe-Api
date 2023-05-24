const mongoose = require("mongoose");
const { isEmail } = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 55,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 55,
    trim: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    minLenght: 3,
    maxLenght: 55,
    trim: true,
  },
  phone: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [isEmail],
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 55,
    trim: true,
  },
  place: { type: String, required: true },
  imgUrl: { type: String },
  date: { type: String },
});

module.exports = mongoose.model("User", userSchema);
