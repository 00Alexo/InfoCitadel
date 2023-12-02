const mongoose = require('mongoose');



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
  },
  password: {
    type: String,
    required: true,
  },
});

// Create the model for the collection
const LogInCollection = mongoose.model("LogInCollection", LogInSchema);

module.exports = LogInCollection;