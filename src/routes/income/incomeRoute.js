const express = require("express");
const {
  createIncCtrl,
  fetchIncCtrl,
  fetchIncByIdCtrl,
  updataIncCtrl,
  deleteIncCtrl,
} = require("../../controllers/income/incomeCtrl");

const incomeRoute = express.Router();

incomeRoute.post("/", createIncCtrl);
incomeRoute.get("/", fetchIncCtrl);
incomeRoute.get("/:id", fetchIncByIdCtrl);
incomeRoute.put("/:id", updataIncCtrl);
incomeRoute.delete("/:id", deleteIncCtrl);

module.exports = incomeRoute;
