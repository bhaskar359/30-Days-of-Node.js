const express = require('express');
const Q16 = express();
const mongoose = require('mongoose');
const PORT = 8080;
require('dotenv').config();


function connectToMongoDB() {
  const uri = process.env.MONGODB_URI
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;

  db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });

  db.once('open', () => {
    console.log('MongoDB connection successful');
  });
}

connectToMongoDB();

Q16.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
})