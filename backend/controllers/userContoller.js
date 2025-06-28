const userSchemaModel = require("../models/userModel");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, username, email, phone, password } = req.body;

    if (!firstName || !lastName || !username || !email || !phone || !password) {
      return res.status(400).json({ status: false, message: "Fill all input" });
    }

    const exitsUser = await userSchemaModel.findOne({ username });

    if (exitsUser) {
      return res
        .status(400)
        .json({ status: false, message: "user allready exits" });
    }

    const user = await userSchemaModel.create({
      firstName,
      lastName,
      username,
      email,
      phone,
      password,
    });

    return res
      .status(201)
      .json({ status: true, message: "data add Succesfully", user });
  } catch (err) {
    return res.status(500).json({ status: false, message: message.err });
  }
};

const loginUser = async (req, res) => {


  try {

      console.log("req.body:", req.body);
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ status: false, message: "Fill all input" });
    }

    const user = await userSchemaModel.findOne({ username });

    if (!user) {
      return res.status(400).json({ status: false, message: "user not exits" });
    }

    //     if (user.password !== password) {

    //  return res.status(400).json({status:false, message:"input wrong password"})
    // }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ status: false, message: "input wrong password" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        
      },
      process.env.JWT_SECRET,

      { expiresIn: "1h" }
    );

    return res
      .status(201)
      .json({ status: true, message: "Login  Succesfully", user,token });
  } catch (err) {
    return res.status(500).json({ status: false, message: err.message });
  }

}


const secureData = async (req, res) => {

  try {
    return res.status(200).json({
      status: true,
      message: "This is protected data",
      user: req.user
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "Failed to load secure data"
    });
  }
  
};



module.exports = { registerUser, loginUser ,secureData};
