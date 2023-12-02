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
      };
      
      await collection.insertMany([data]);
      console.log("New account created successfully");

      res.redirect('/');
    } catch (error) {
      console.error("Error in signup:", error);
      res.status(500).send("Internal Server Error");
    }
  });



app.listen(3000, () => {
    console.log('listening on port 3000');
});