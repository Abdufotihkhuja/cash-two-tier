const path = require("path");
const model = require("./model.js");
const GET = (req, res) => {
  let income = require(path.join(
    process.cwd(),
    "backend",
    "database",
    "income.json"
  ));
  res.json(income);
};
const POST = (req, res) => {
  model.insertIncome(req.body);
  res.status(201).json({ message: "The income is added", body: req.body });
};
const DELETE = (req, res) => {
  let deleted = model.del(req.body);
  if (deleted) {
    res.status(200).json({ message: "The income is deleted", body: deleted });
  } else {
    res.status(200).json({ message: "The income is not found", body: null });
  }
};
module.exports = {
  GET,
  POST,
  DELETE
};
