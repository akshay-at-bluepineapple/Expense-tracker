const User = require("../../model/User");
const expressAsyncHandler = require("express-async-handler");

//register
const registerUserCtrl = expressAsyncHandler(async (req, res) => {
  const { email, firstname, lastname, password } = req?.body; //getting data from the body and refactoring it
  //cheeck if user exist
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) throw new Error("User already exists");
  try {
    const user = await User.create({ email, firstname, lastname, password });
    res.status(200).json(user);
  } catch (error) {
    res.json(error);
  }
});

//fetch all users
const fetchUsersCtrl = expressAsyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});

//dont ever throw any error in the try and catch so to avoid this I have used expressAsyncHandler and hence userExists  code is out of try&catch
//the code for custom error has been written in errorMiddleware
//the problem with try and catch is that if you write it inside try, it will give you no feed back.

module.exports = { registerUserCtrl, fetchUsersCtrl };
