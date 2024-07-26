const userController = {};

const User = require("../models/User");

userController.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
userController.createUser = async (req, res) => {
  const { username } = req.body;
  const newUser = new User({
    username: username,
  });
  await newUser.save();
  res.json({message: 'User Saved'})
};

userController.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json("User Delete");
};

module.exports = userController;
