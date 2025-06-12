const User = require('../models/userModel');

const getUser = async (req, res) => {
  try {
    const users = await User.find({}, 'name mobile');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching users' });
  }
};

module.exports = getUser;
