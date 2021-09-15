const path = require("path");
const GET = (req, res) => {
  let expanse = require(path.join(
    process.cwd(),
    "backend",
    "database",
    "expanse.json"
  ));
  let income = require(path.join(
    process.cwd(),
    "backend",
    "database",
    "income.json"
  ));

  expanse = !expanse ? [] : expanse;
  income = !income ? [] : income;

  let totalExpanse = expanse.reduce((acc, ex) => acc + +ex.expanseSum, 0);
  let totalIncome = income.reduce((acc, ex) => acc + +ex.incomeSum, 0);
  let totalMoney = totalIncome - totalExpanse;
  res.json({
    Inputs: [income, expanse],
    Total: [totalIncome, totalExpanse, totalMoney],
  });
};

module.exports = {
  GET,
};
