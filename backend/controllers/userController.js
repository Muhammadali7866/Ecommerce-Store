const User = require("../models/userModel");

// create the user

const userRegister = async (req, res) => {
  const { firstName, lastName, email, password, userName } = req.body;
  const users = await User.create({
    firstName,
    lastName,
    email,
    password,
    userName,
  });
  return res.status(201).json({
    message: "User is created succesfully",
    status: "success",
    users: {
      users,
    },
  });
};

module.exports = { userRegister };
