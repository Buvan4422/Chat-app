const usr = require('../models/user.model.js');
const bcrypt = require('bcryptjs');
const genJWT = require('../utilis/genJWTandCookies.js');

const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password doesn't match" });
    }
    const user = await usr.findOne({ userName });
    if (user) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    //hasing password here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfPic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfPic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUsr = new usr({
      fullName,
      userName,
      password: hashedPassword,
      confirmPassword,
      gender,
      profilepic: gender === 'male' ? boyProfPic : girlProfPic,
    });
    if (newUsr) {
      genJWT(newUsr._id, res);
      await newUsr.save();

      res.status(201).json({
        _id: newUsr._id,
        fullName: newUsr.fullName,
        userName: newUsr.userName,
        profilepic: newUsr.profilepic,
      });
    } else {
      res.status(500).json({ error: 'Invalid user data' });
    }
  } catch (error) {
    console.log('Error in signup controller file', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const logout = (req, res) => {
  try {
    res.cookie('jwt', '', { maxAge: 0 });
    res.status(200).json({ message: 'Logged out success' });
  } catch (error) {
    console.log('Error in logout controller file', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await usr.findOne({ userName });
    const isPwdCrct = await bcrypt.compare(password, user.password);

    if (!user || !isPwdCrct) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }
    genJWT(user._id, res);
    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      profilepic: user.profilepic,
    });
  } catch (error) {
    console.log('Error in login controller file', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  login,
  signup,
  logout,
};
