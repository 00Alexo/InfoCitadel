const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const templatePath = path.join(__dirname);

app.use(express.json());
app.set('view engine', 'html');
app.set('views', templatePath);
app.use('/FirstPage', express.static(path.join(__dirname, 'FirstPage')));

app.get('/', (req, res) => {
    res.sendFile(path.join(templatePath, 'index.html'));
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});

/*
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const templatePath = path.join(__dirname);

app.use(express.json());
app.set('view engine', 'html');
app.set('views', templatePath);

app.use('/FirstPage', express.static(path.join(__dirname, 'FirstPage')));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
*/