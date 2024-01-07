require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const collection= require('./models/login.js');
const problemeRoutes = require('./routes/problemeRoutes.js')
const cors = require('cors');

app.use(cors({
  origin: ['http://localhost:3000/', 'https://www.infocitadel.tech', 'https://infocitadel.vercel.app', 'https://infocitadeltest.onrender.com']
}))

mongoose.connect(process.env.mongoDB)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  }); 

const saltRounds= 12;

app.use(express.json());
app.use(express.urlencoded({extended:false}));




app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next();
 })

app.use('/api/probleme', problemeRoutes)


app.post("/register", async (req, res) => {
    try {

      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

      const passwordConfirmation = req.body.confirmPassword;

      const data = {
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
        userProgress: {
          solutions: 0,
          points: 0,
        },
        admin: false,
      };
      
      if(passwordConfirmation == req.body.password){
        const Collection = await collection.create(data);
        console.log("New account created successfully: ", data);
      }else{
        // Set a variable to hold the error code
        error = { code: 1838193 };
        throw error;
      }

    } catch (error) {

      console.error("Error in signup:", error);
 
      if(error.code === 11000)
        res.status(400).send("Email/Username already in use!");
      else if(error.code === 1838193)
        res.status(400).send("Passwords do not match");
      else
        res.status(500).send("Internal Server Error");
      
    }
  });

  app.post("/login", async (req, res) => {
    try {
      let check;
      let signinValidator = req.body.username.split("");
      let isEmail = false;
      for (let i =0; i < signinValidator.length; i++) {
        if(signinValidator[i] == '@'){
          isEmail = true;
          break;
        }
      }
      if(!isEmail) {
        check=await collection.findOne({username: req.body.username});
      }else{
        check=await collection.findOne({email: req.body.username});
      }


      if (check) {
        // Use bcrypt.compare to check if the entered password matches the stored hashed password
        const passwordMatch = await bcrypt.compare(req.body.password, check.password);

        if (passwordMatch) {
            console.log("User logged in: \n", check);
        } else {
            res.send("Wrong password");
        }
    } else {
        res.send("User not found");
    }

    } catch (error) {
      res.send("Wrong details");
    }
  });




app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT);
});
 


