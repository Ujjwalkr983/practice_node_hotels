const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3002;

const Person = require('./models/person')
const MenuItem = require('./models/MenuItem')



app.get('/', function(req, res){
    res.send('welcome to my hotel how can i asiist you');
});





const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);



// chenge kr dieye
app.listen(3002, ()=>{
    console.log("listening on port 3000");
}); 

