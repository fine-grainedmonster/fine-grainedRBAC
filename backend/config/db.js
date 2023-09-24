const mongoose = require("mongoose");
const logger=require("../utils/logger")
const connectDB = async () => {
  try {
     mongoose.set('strictQuery', true)
    const uri = 'mongodb+srv://azatitebi:cYSDXhXpbmQZIIaW@cluster0.6n9puxt.mongodb.net/'
    const conn = await mongoose.connect(uri);
  
    console.log(`Mongodb connected:${conn.connection.host}`.cyan.underline);
    logger.info(`database up and running on development`)
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDB;

