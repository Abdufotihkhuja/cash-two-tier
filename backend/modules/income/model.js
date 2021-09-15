const path = require("path");
const fs = require("fs");
const insertIncome = (data) => {
  const { incomeAim, incomeSum } = data;
  let datas = require(path.join(
    process.cwd(),
    "backend",
    "database",
    "income.json"
  ));
  let incomeId = datas.length ? datas[datas.length - 1].incomeId + 1 : 1;
  let newIncome = {
    incomeId,
    incomeAim,
    incomeSum,
    incomeDate: new Date(),
  };
  datas.push(newIncome);
  fs.writeFileSync(
    path.join(process.cwd(), "backend", "database", "income.json"),
    JSON.stringify(datas)
  );
};
const del = (obj) => {
  const { incomeId } = obj;
  try {
    let income = require(path.join(
      process.cwd(),
      "backend",
      "database",
      "income.json"
    ));
    let found = income.filter((ex) => ex.incomeId != incomeId);
    if (found.length < income.length) {
      fs.writeFileSync(
        path.join(process.cwd(), "backend", "database", "income.json"),
        JSON.stringify(found)
      );
      return found;
    } else {
      console.log("The user is not found");
    }
  } catch (err) {
    throw err;
  }
};
module.exports = {
  insertIncome,
  del,
};
