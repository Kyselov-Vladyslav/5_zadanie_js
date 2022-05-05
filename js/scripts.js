"use strict";

const userSurname = ["Kania", "Nowak", "Kowalska", "Maszczykowska"];
const userName = ["Piotr", "Adam", "Anna", "Monika"];
document.querySelector("table").className = "table table-striped";
document.querySelector("thead").className = "thead-dark";

for (let i = 0; i < userName.length || i < userSurname.length ; i++) {
  const tr = document.createElement("tr");
  tr.className = "users-added";
  const th = document.createElement("th");
  th.scope = "row";
  const tdSurname = document.createElement("td");
  const tdName = document.createElement("td");
  document.querySelector("tbody").appendChild(tr);
  document.querySelectorAll(".users-added")[i].prepend(th);
  document.querySelectorAll(".users-added")[i].appendChild(tdSurname);
  document.querySelectorAll(".users-added")[i].appendChild(tdName);
  th.textContent = i+1;
  tdSurname.textContent = userSurname[i];
  tdName.textContent = userName[i]
}

