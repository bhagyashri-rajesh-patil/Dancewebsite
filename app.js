const express = require("express");
const path = require("path");
const fs= require("fs");
const app = express();
const port=80;


// app.use(express.static('static', options));
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded())

app.engine('pug', require('pug').__express)
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('index.pug');
})
app.get('/home', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug');
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});





