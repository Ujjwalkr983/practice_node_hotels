// data base connection baithane k liye file
const mongoose = require('mongoose');

// define the mongodb connection url
const mongoURL = "mongodb://localhost:27017/hotels";

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// const connectDB = async () => {
//     try {
//       const conn = await mongoose.connect(process.env.MONGO_URI);
//     }catch(err){}
//   }


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