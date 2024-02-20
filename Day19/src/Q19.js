const express = require('express');
const connectDB = require('./services/db');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const PORT = process.env.PORT;

connectDB();

const Q19 = express();
Q19.use(express.json())

Q19.use('/users', userRoutes);

Q19.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
