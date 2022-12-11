const express = require("express");
const mongoose = require("mongoose");
const dbConnect = require("./config/dbConnect");
const { errorHandler } = require("./middleware/errorMiddleware");
const { notfound } = require("./middleware/notFound");

const app = express();
const userRoute = require("./routes/users/usersRoute");

mongoose.set("strictQuery", false);

//middleware function

// const logger = (req, res, next) => {
//   console.log("logger function");
//   next();
// };
// app.use(logger);

app.use(express.json());
app.get('/',(req,res)=>{
    res.json({
        msg:"welcome expense tracker api"
    })
})

//datrabase connection
dbConnect();

//routes
app.use("/api/users", userRoute);

//error
app.use(notfound);
app.use(errorHandler);

module.exports = app;


//two error handler have beeen added 
//1.notfound - to handle a route which  doesn't exist
//2.errorhandler - to handle error if user exists during registration 
//order matters of the error handler
//thats why notfound 1st and errorHandler 2nd
