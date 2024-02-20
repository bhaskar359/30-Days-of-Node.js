const User = require("../models/userModel");

async function getAllUsers(req, res) {
  try {
    const users = await User.find({});
    if (users.length) {
      console.log(`Fetched ${users.length} successfully.`);
      res.json(users);
    } else {
      res.status(200).send("No Users found.");
    }
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Error fetching users" });
  }
}

async function addUserWithValidation(user) {
  try {
    console.log(user);
    const newUser = new User(user);
    await newUser.save();
    console.log('User added successfully');
    return newUser;
  } catch (error) {
    console.error('Error adding user:', error.message);
    if (error.errors && error.errors.email) {
      return { error: error.errors.email.message };
    }
    return { error: 'An error occurred while adding the user' };
  }
}

async function addUserWithValidationController(req, res) {
  try {
    const user = req.body;
    const response = await addUserWithValidation(user);
    if (response?.error) {
      res.status(400).json({ error: response.error });
    } else {
      res.status(200).json({ message: 'User added successfully', user: response });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getAllUsers,
  addUserWithValidationController
};
