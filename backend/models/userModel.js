const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  phone: String,
  password: String,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    console.log("password not hash");
    return next();
  }

  console.log("password  hashing");

  this.password = await bcrypt.hash(this.password, 10);

  next();
});

const userSchemaModel = mongoose.model("User", userSchema);

module.exports = userSchemaModel;
