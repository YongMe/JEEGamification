const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  studyTime: { type: Number, default: 0 },
  streak: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', UserSchema);