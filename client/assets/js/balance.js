async function renderIncome() {
  let income = await request("/income", "GET");
  for (let inc of income) {
    let tr = document.createElement("tr");
    let n = document.createElement("td");
    let aim = document.createElement("td");
    let sum = document.createElement("td");
    let date = document.createElement("td");

    n.textContent = inc.incomeId;
    aim.textContent = inc.incomeAim;
    sum.textContent = inc.incomeSum;
    date.textContent = inc.incomeDate;

    tr.appendChild(n);
    tr.appendChild(aim);
    tr.appendChild(sum);
    tr.appendChild(date);

    tableIncome.appendChild(tr);
  }
}
renderIncome();

async function renderExpanse() {
  let expanse = await request("/expanse", "GET");
  for (let exp of expanse) {
    let tr = document.createElement("tr");
    let n = document.createElement("td");
    let aim = document.createElement("td");
    let sum = document.createElement("td");
    let date = document.createElement("td");

    n.textContent = exp.expanseId;
    aim.textContent = exp.expanseAim;
    sum.textContent = exp.expanseSum;
    date.textContent = exp.expanseDate;

    tr.appendChild(n);
    tr.appendChild(aim);
    tr.appendChild(sum);
    tr.appendChild(date);

    tableExpanse.appendChild(tr);
  }
}
renderExpanse();

async function renderBalance() {
  let balance = await request("/balance", "GET");
  const {
    Total: [totalIncome, totalExpanse, totalMoney],
  } = balance;
  let tr = document.createElement("tr");
  let totalIncomeElement = document.createElement("td");
  let totalExpanseElement = document.createElement("td");
  let totalMoneyElement = document.createElement("td");

  totalIncomeElement.textContent = totalIncome;
  totalExpanseElement.textContent = totalExpanse;
  totalMoneyElement.textContent = totalMoney;

  tr.appendChild(totalIncomeElement);
  tr.appendChild(totalExpanseElement);
  tr.appendChild(totalMoneyElement);

  tableTotal.appendChild(tr);
}
renderBalance();
