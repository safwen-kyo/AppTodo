const mongoose =require("mongoose");
require('dotenv').config();
const MONGO_URI = process.env.DB_URI ;

main();

 async function main() {
    try{
        await mongoose.connect(MONGO_URI);
        console.log("Connected Database Successfully ");
    }
    catch(error){
        console.error("Could not connect to Database" ,error);
    }
  }



module.exports= main ;