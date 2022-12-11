const mongoose = require("mongoose");

//schema
const expenseSchema = mongoose.Schema(
  {
    title: {
      required: [true, "title is required"],
      type: String,
    },
    description: {
      required: [true, "description is required"],
      type: String,
    },
    type: {
      type: String,
      default: "expense",
    },
    amount: {
      required: [true, "amount is required"],
      type: Number,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User id is required"],
    },
  },
  { timestamps: true }
);

const Expense = mongoose.model("Expense", expenseSchema);
module.exports = Expense;

//--useful comments --
//user field
//add user field as expense is associated with user i.e 1-m relatin
