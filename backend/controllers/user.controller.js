const User = require('../models/user.model.js');
const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUserid = req.user._id;

    const filteredUser = await User.find({
      _id: { $ne: loggedInUserid },
    }).select('-password');
    //  const allUser = await User.find();

    res.status(200).json(filteredUser);
  } catch (err) {
    console.log('Error in getUserForSidebar', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = getUserForSidebar;
