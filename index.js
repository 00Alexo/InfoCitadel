const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const collection= require('./mongodb');

const templatePath = path.join(__dirname);

app.use(express.json());
app.set('view engine', 'html');
app.set('views', templatePath);
app.use(express.urlencoded({extended:false}));
app.use('/FirstPage', express.static(path.join(__dirname, 'FirstPage')));
app.use('/Fonts', express.static(path.join(__dirname, 'Fonts')));

app.use('/login', (req, res) => {
    res.redirect('/');
});

app.use('/signup', (req, res) => {
    res.redirect('/');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(templatePath, 'index.html'));
});



app.post("/signup",async (req, res) => {

const data={
    username:req.body.username,
    password:req.body.password
}

await collection.insertMany([data]);

res.sendFile(path.join(templatePath, 'index.html'));

})

app.listen(3000, () => {
    console.log('listening on port 3000');
});