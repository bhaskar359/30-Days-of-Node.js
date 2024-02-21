const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        console.log("value",value);
        return /\S+@\S+\.\S+/.test(value);
      },
      message: 'Invalid email format'
    }
  },
  age: {
    type:Number,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
