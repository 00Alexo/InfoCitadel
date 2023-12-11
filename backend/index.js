const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bcrypt = require('bcryptjs');
const collection= require('./mongodb');

const templatePath = path.join(__dirname);
const saltRounds= 12;

app.use(express.json());
app.set('view engine', 'hbs');
app.set('views', templatePath);
app.use(express.urlencoded({extended:false}));
app.use('/FirstPage', express.static(path.join(__dirname, '../FirstPage')));
app.use('/Fonts', express.static(path.join(__dirname, '../Fonts')));



app.get('/', (req, res) => {
    res.sendFile(path.join(templatePath, '../index.html'));
});

 


app.post("/backend/templates/signup.hbs", async (req, res) => {
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
        await collection.insertMany([data]);
        console.log("New account created successfully: ", data);
      }else{
        // Set a variable to hold the error code
        error = { code: 1838193 };
        throw error;
      }

      res.redirect('https://infocitadel.netlify.app');
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


  app.post("/backend/templates/login.hbs", async (req, res) => {
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
            res.redirect('https://infocitadel.netlify.app');
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



/*app.listen(3000, () => {
    console.log('listening on port 3000');
});*/

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on port', process.env.PORT || 3000);
});


// TODO: WHEN DEPLOYING: 
                    // Modify HTML ACTIONS WITH https://infocitadeltest.onrender.com
                    // Modifiy post redirects to https://infocitadel.netlify.app