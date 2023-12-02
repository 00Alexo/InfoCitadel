const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const collection= require('./mongodb');

const templatePath = path.join(__dirname);

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
      const data = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        admin: false,
      };
      
      await collection.insertMany([data]);
      console.log("New account created successfully");

      res.redirect('/');
    } catch (error) {
      console.error("Error in signup:", error);
      res.status(500).send("Internal Server Error");
    }
  });


  app.post("/backend/templates/login.hbs", async (req, res) => {
    try {
      
      const check=await collection.findOne({username: req.body.username});

      if(check.password === req.body.password){
        res.redirect('/');
        console.log("User logged in: \n", check);
      }else{
        res.send("wrong password");
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