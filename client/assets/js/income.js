async function renderIncome() {
  let income = await request("/income", "GET");
  table.innerHTML = null;
  let header = `
  <tr class="table-header">
        <th id="incomeId">N</th>
        <th id="incomeAim">Aim</th>
        <th id="incomeSumm">Summ</th>
        <th id="incomeTime">Time</th>
        <th id="deleteTd">Method</th>
  </tr>`;
  table.innerHTML = header;
  for (let inc of income) {
    let tr = document.createElement("tr");
    let n = document.createElement("td");
    let aim = document.createElement("td");
    let sum = document.createElement("td");
    let date = document.createElement("td");
    let deleteTd = document.createElement("td");
    let button = document.createElement("button");

    button.textContent = "Delete";
    n.textContent = inc.incomeId;
    aim.textContent = inc.incomeAim;
    sum.textContent = inc.incomeSum;
    date.textContent = inc.incomeDate;
    button.setAttribute("id", "deleteBtn");
    deleteTd.setAttribute("id", "deleteTd");
    tr.appendChild(n);
    tr.appendChild(aim);
    tr.appendChild(sum);
    tr.appendChild(date);
    tr.appendChild(deleteTd);
    deleteTd.appendChild(button);

    table.appendChild(tr);
    button.onclick = async (e) => {
      e.preventDefault();
      let response = await request("/income", "DELETE", {
        incomeId: inc.incomeId,
      });
      tr.remove();
    };
  }
}
form.onsubmit = async (event) => {
  event.preventDefault();
  let obj = {
    incomeAim: Aim.value,
    incomeSum: incomeSum.value,
  };
  let response = await request("/income", "POST", obj);
  renderIncome();
};
renderIncome();
