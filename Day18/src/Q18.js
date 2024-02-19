const express = require('express');
const connectDB = require('./services/db');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const PORT = process.env.PORT;

connectDB();

const Q18 = express();

Q18.use('/users', userRoutes);

Q18.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
