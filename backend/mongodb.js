const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.mongoDB)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });  


