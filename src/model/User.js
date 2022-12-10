const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
//schema
const userSchema = mongoose.Schema(
  {
    firstname: {
      required: [true, "first name is required"],
      type: String,
    },
    email: {
      required: [true, "email is required"],
      type: String,
    },
    password: {
      required: [true, "password is required"],
      type: String,
    },
    admin: {
      default: false,
      type: Boolean,
    },
  },
  { timestamps: true }
);

//Hash password
userSchema.pre('save',async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
})

//compile scheme to model
const User = mongoose.model("User", userSchema);
module.exports = User;


//the userSchema.pre will be called before the schema is compiled 
//i.e before const User