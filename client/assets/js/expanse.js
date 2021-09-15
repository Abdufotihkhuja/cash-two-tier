async function renderExpanse() {
  let expanse = await request("/expanse", "GET");
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
  for (let exp of expanse) {
    let tr = document.createElement("tr");
    let n = document.createElement("td");
    let aim = document.createElement("td");
    let sum = document.createElement("td");
    let date = document.createElement("td");
    let deleteTd = document.createElement("td");
    let button = document.createElement("button");

    button.textContent = "Delete";
    n.textContent = exp.expanseId;
    aim.textContent = exp.expanseAim;
    sum.textContent = exp.expanseSum;
    date.textContent = exp.expanseDate;

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
      let response = await request("/expanse", "DELETE", {
        expanseId: exp.expanseId,
      });
      tr.remove();
    };
  }
}
form.onsubmit = async (event) => {
  event.preventDefault();
  let obj = {
    expanseAim: expanseAim.value,
    expanseSum: expanseSum.value,
  };
  let response = await request("/expanse", "POST", obj);
  renderExpanse();
  return response;
};
renderExpanse();
