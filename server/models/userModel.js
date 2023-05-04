const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age:{
    type:String,
    required:true,
  },
  birthdate:{
    type:String,
    required:true,
  },
  phonenumber:{
    type:String,
    required:true,
  },
  gender:{
    type:String,
    required:true,
  },
  address:{
    type:String,
    required:true
  }
});

//static signup method
userSchema.statics.signup = async function (name, email, password, age,birthdate,phonenumber,gender,address ) {
  console.log(email);
  //validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Enter a valid Email");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ name, email, password:hash, age,birthdate,phonenumber,gender,address });

  return user;
};

//static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password ");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);