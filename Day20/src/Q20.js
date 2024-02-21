const express = require('express');
const connectDB = require('./services/db');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const PORT = process.env.PORT;

connectDB();

const Q20 = express();
Q20.use(express.json())

Q20.use('/users', userRoutes);

Q20.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
