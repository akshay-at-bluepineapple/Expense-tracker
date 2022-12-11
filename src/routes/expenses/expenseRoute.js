const express = require("express");
const {
  createExpCtrl,
  fetchExpCtrl,
  fetchExpByIdCtrl,
  updataExpCtrl,
  deleteExpCtrl,
} = require("../../controllers/expenses/expenseCtrl");

const expenseRoute = express.Router();

expenseRoute.post("/", createExpCtrl);
expenseRoute.get("/", fetchExpCtrl);
expenseRoute.get("/:id", fetchExpByIdCtrl);
expenseRoute.put("/:id", updataExpCtrl);
expenseRoute.delete("/:id", deleteExpCtrl);

module.exports = expenseRoute;
