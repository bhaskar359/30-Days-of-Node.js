const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGODB_URI;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);

async function addUserToDatabase(user) {
  try {
    const newUser = new User(user);
    await newUser.save();
    console.log("User added successfully");
  } catch (error) {
    console.error("Error adding user to database:", error);
  }
}
async function connectToMongoDB() {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
    const db = mongoose.connection;
  
    db.on('error', (error) => {
      console.error('MongoDB connection error:', error);
    });
  
    db.once('open', () => {
      console.log('MongoDB connection successful');
    });
}

let init = async()=>{
    await connectToMongoDB();
    await addUserToDatabase({ username: "scaler_day17", email: "scaler@example.com" });
}
init()