const User = require('../models/userModel');

const createUser = async (req, res) => {
  try {
    const { name, mobile } = req.body;
    const user = new User({ name, mobile });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error creating user' });
  }
};

module.exports = createUser;
