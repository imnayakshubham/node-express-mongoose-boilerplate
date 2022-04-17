const User = require("../modals/UserSchema.js");
const generateToken = require("../utils/generateTokens.js");

const registerUser = async (req, res) => {
  try {
    // Logic here
  } catch (error) {
    res.status(400).json({ status: "Failed", message: error });
  }
};

const loginUser = async (req, res) => {
    try {
    // Logic here
  } catch (error) {
      res.status(403).json({ status: "Failed", message: error });
    }
  };

module.exports = { registerUser,loginUser };
