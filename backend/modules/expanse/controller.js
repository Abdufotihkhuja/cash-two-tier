const path = require("path");
const model = require("./model.js");
const GET = (req, res) => {
  let expanse = require(path.join(
    process.cwd(),
    "backend",
    "database",
    "expanse.json"
  ));
  res.json(expanse);
};
const POST = (req, res) => {
  model.insertExpanse(req.body);
  res.status(201).json({ message: "The expanse is added", body: req.body });
};
const DELETE = (req, res) => {
  let deleted = model.del(req.body);
  if (deleted) {
    res.status(200).json({ message: "The expanse is deleted", body: deleted });
  } else {
    res.status(200).json({ message: "The expanse is not found", body: null });
  }
};
module.exports = {
  GET,
  POST,
  DELETE,
};
