const path = require("path");
const fs = require("fs");

const insertExpanse = (data) => {
  const { expanseAim, expanseSum } = data;
  let datas = require(path.join(
    process.cwd(),
    "backend",
    "database",
    "expanse.json"
  ));
  let expanseId = datas.length ? datas[datas.length - 1].expanseId + 1 : 1;
  let newExpanse = {
    expanseId,
    expanseAim,
    expanseSum,
    expanseDate: new Date(),
  };
  datas.push(newExpanse);
  fs.writeFileSync(
    path.join(process.cwd(), "backend", "database", "expanse.json"),
    JSON.stringify(datas)
  );
};

const del = (obj) => {
  const { expanseId } = obj;
  try {
    let expanse = require(path.join(
      process.cwd(),
      "backend",
      "database",
      "expanse.json"
    ));
    let found = expanse.filter((ex) => ex.expanseId != expanseId);
    if (found.length < expanse.length) {
      fs.writeFileSync(
        path.join(process.cwd(), "backend", "database", "expanse.json"),
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
  insertExpanse,
  del,
};
