const mongoose = require('mongoose');
require('dotenv').config();


// Connect to MongoDB
mongoose.connect(process.env.mongoDB)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });

// Define the schema for the collection
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

// Create the model for the collection
const LogInCollection = mongoose.model("LogInCollection", LogInSchema);

module.exports = LogInCollection;

