const express = require("express");
const { registerUserCtrl,fetchUsersCtrl } = require("../../controllers/users/usersController");



const userRoute = express.Router();

userRoute.post("/register", registerUserCtrl);
userRoute.get("/users", fetchUsersCtrl);

module.exports = userRoute;
