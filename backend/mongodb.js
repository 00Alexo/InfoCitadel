const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Alexo:WnwvCW1WsQvOFxxf@infocitadel.ttihf7o.mongodb.net/")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch(() => {
        console.log("MongoDB connection failed:");
    });

const LogInSchema=new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
})

const collection=new mongoose.model("LogInCollection",  LogInSchema);

module.exports=collection;