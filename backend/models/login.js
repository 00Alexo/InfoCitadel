const mongoose = require('mongoose');
require('dotenv').config();

const LogInSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    }, 
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String, 
      required: false, 
    },
    userProgress: {
      solutions: Number,
      points: Number,
    },
    admin: {
      type: Boolean,
      required: true,
    },
    email: { 
      type: String, 
      required: true,
      unique: true,
    },
  }, {timestamps: true});
  
  LogInSchema.index({ email: 1 }, { unique: true });
  
  const LogInCollection = mongoose.model("LogInCollection", LogInSchema);
  
  module.exports = LogInCollection;