let generador = document.getElementById("excuse");

let excusasquien = ["the dog", "my granma", "his turtle", "my bird"];
let excusasque = ["eat", "pissed", "crushed", "broked"];
let excusascuando = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

let randomExcusaQuien = Math.floor(Math.random() * excusasquien.length);

let randomExcusaQue = Math.floor(Math.random() * excusasque.length);

let randomExcusaCuandi = Math.floor(Math.random() * excusascuando.length);

generador.innerHTML = ` <h6>${excusasquien[randomExcusaQuien]} ${excusasque[randomExcusaQue]} ${excusascuando[randomExcusaCuandi]} </h6>`;

let refresh = document.querySelector(".btn-outline-danger");
refresh.addEventListener("click", e => {
  location.reload();
});
