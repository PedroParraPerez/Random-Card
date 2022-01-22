import "./style.css";

window.onload = function() {};

// Random number and icon functions

const Numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const Symbols = ["♣", "♠", "♥", "♦"];

const Random = arr => {
  return Math.floor(Math.random() * arr.length);
};

const RandomForRefresh = arr => {
  return Math.floor(Math.random() * arr.length);
};
// values for start and refresh, they are diferent
const Number_Start = Numbers[Random(Numbers)];
const Icon_Start = Symbols[Random(Symbols)];
const Number_Refresh = Numbers[RandomForRefresh(Numbers)];
const Icon_Refresh = Symbols[RandomForRefresh(Symbols)];

// Icon and Numbers querySelector for Start
document.querySelector("#Number1").innerHTML = Number_Start;
document.querySelector("#Number2").innerHTML = Number_Start;
document.querySelector("#icon").innerHTML = Icon_Start;

// Select card.
let Scolor = document.querySelector("#SelectColor");
let Snumber = document.querySelector("#SelectNumber");
const buttonselect = document.querySelector("#buttonselect");

buttonselect.addEventListener("click", e => {
  document.querySelector("#Number1").innerHTML = Snumber.value;
  document.querySelector("#Number2").innerHTML = Snumber.value;
  document.querySelector("#icon").innerHTML = Scolor.value;
});

// Color (HACER UNA CLASE CON LOS COLORES Y APLICARLE UN CLASSLISTENER)
let color = v => {
  if (Icon_Start == "♥" || Icon_Start == "♦") {
    document.querySelector("#icon").style.color = "red";
  }
};
color();

const Slcolor = v => {
  if (Scolor.value == "♥" || Scolor.value == "♦") {
    document.querySelector("#icon").style.color = "red";
  }
};
Slcolor();

// Refresh botton

const buttonRefresh = document.querySelector(".buttonRefresh");
buttonRefresh.addEventListener("submit", e => {
  e.preventDefault();
  document.querySelector("#Number1").innerHTML = Number_Refresh;
  document.querySelector("#Number2").innerHTML = Number_Refresh;
  document.querySelector("#icon").innerHTML = Icon_Refresh;
});
//   No consigo ejecutar las funciones randoms al presionar el boton pero al pulsar el boton si que reacciona y escribe en la consola enviar
