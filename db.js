// data base connection baithane k liye file
const mongoose = require('mongoose');
require('dotenv').config();

// define the mongodb connection url
// const mongoURL = process.env.MONGO_URL_LOCAL;
// const mongoURL = 'mongodb+srv://ujjwalkumar98355:0SwFIM61KQINZBFA@cluster0.mosrcht.mongodb.net/';
const mongoURL = process.env.MONGO_URL;


mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



const db = mongoose.connection;


// define event listener for database connection
db.on('connected', ()=>{
    console.log("connected to mongodb server");
});

db.on('error', (err)=>{
    console.log("mongodb connection error");
});

db.on('disconnected', ()=>{
    console.log("mongodb disconnected");
});

// export the data base connection 
module.exports = db;