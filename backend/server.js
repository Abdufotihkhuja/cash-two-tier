const { host, PORT } = require("./config.js");
const express = require("express");
const incomeController = require("./modules/income/controller.js");
const expanseController = require("./modules/expanse/controller.js");
const balanceController = require("./modules/balance/controller.js");
const cors = require("cors");

const app = express();

//  Middleware
app.use(express.json());
app.use(cors());
//  GET

app.get("/balance", balanceController.GET);
app.get("/expanse", expanseController.GET);
app.get("/income", incomeController.GET);
//  POST
app.post("/expanse", expanseController.POST);
app.post("/income", incomeController.POST);

//  DELETE
app.delete("/expanse", expanseController.DELETE);
app.delete("/income", incomeController.DELETE);

app.listen(PORT, (req, res) => {
  console.log(`Server is working at http://${host}:${PORT}`);
});
