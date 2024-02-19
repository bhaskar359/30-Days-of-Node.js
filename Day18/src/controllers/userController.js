const User = require('../models/userModel');

async function getAllUsers(req, res) {
  try {
    const users = await User.find({});
    if(users.length){
        console.log(`Fetched ${users.length} successfully.`)
        res.json(users);
    }
    else{
        res.status(200).send("No Users found.")
    }
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Error fetching users' });
  }
}
module.exports = {
  getAllUsers
};
