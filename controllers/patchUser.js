const User = require('../models/userModel');

const patchUser = async (req, res) => {
  try {
    const { name, mobile } = req.body;
    const updates = {};
    if (name) updates.name = name;
    if (mobile) updates.mobile = mobile;

    const updatedUser = await User.findByIdAndUpdate(req.params.id, updates, { new: true });
    res.json(updatedUser);
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error patching user' });
  }
};

module.exports = patchUser;
