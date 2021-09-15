const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

//  Config
const host = "localhost";
const PORT = process.env.PORT || 3000;
//Middlewares
app.use(express.static(path.join(__dirname, "assets")));

//  GET
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "assets", "index.html"));
});
app.get("/income", (req, res) => {
  res.sendFile(path.join(__dirname, "assets", "pages", "income.html"));
});
app.get("/expanse", (req, res) => {
  res.sendFile(path.join(__dirname, "assets", "pages", "expanse.html"));
});
app.get("/balance", (req, res) => {
  res.sendFile(path.join(__dirname, "assets", "pages", "balance.html"));
});

app.listen(PORT, () => {
  console.log(`Server working at http://${host}:${PORT}`);
});
