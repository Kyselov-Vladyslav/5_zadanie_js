"use strict";

const user_surname = ["Kania", "Nowak", "Kowalska", "Maszczykowska"];
const user_name = ["Piotr", "Adam", "Anna", "Monika"];
document.querySelector("table").className = "table table-striped";
document.querySelector("thead").className = "thead-dark";
let number = 0;

for (let i = 0; i < user_surname.length; i++) {
  number++;
  const tr = document.createElement("tr");
  tr.className = "users_added";
  const th = document.createElement("th");
  th.scope = "row";
  const td = document.createElement("td");
  document.querySelector("tbody").appendChild(tr);
  document.querySelectorAll(".users_added")[i].prepend(th);
  document.querySelectorAll(".users_added")[i].appendChild(td);
  th.textContent = number;
  td.textContent = user_surname[i];
}

for (let j = 0; j < user_name.length; j++) {
  const td = document.createElement("td");
  document.querySelectorAll(".users_added")[j].appendChild(td);
  td.textContent = user_name[j];
}

