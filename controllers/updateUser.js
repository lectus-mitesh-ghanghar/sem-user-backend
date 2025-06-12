const User = require('../models/userModel');

const updateUser = async (req, res) => {
  try {
    const { id, name, mobile } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, mobile },
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: 'Error updating user' });
  }
};

module.exports = updateUser;
