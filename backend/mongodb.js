const mongoose = require('mongoose');

// Use environment variables for sensitive information
const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_CLUSTER, MONGODB_DATABASE } = process.env;

// Connect to MongoDB
mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`,

)
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