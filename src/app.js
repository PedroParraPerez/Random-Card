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
// values for start, they are diferent
const Number_Start = Numbers[Random(Numbers)];
const Icon_Start = Symbols[Random(Symbols)];

// Icon and Numbers querySelector for Start
document.querySelector("#Number1").innerHTML = Number_Start;
document.querySelector("#Number2").innerHTML = Number_Start;
document.querySelector("#icon").innerHTML = Icon_Start;

// Color Start
let color = v => {
  if (Icon_Start == "♥" || Icon_Start == "♦") {
    document.querySelector("#icon").style.color = "red";
  }
};
color();

// Refresh botton
// PROBLEMA: NO ME CAMBIA EL COLOR DEL ICONO (HAY ALGUNA FORMA DE LLAMAR A LA FUNCION DEL PRINCIPIO SIN QUE ME DE EL MISMO NUMERO?)

const buttonRefresh = document.querySelector(".buttonRefresh");
buttonRefresh.addEventListener("click", e => {
  e.preventDefault();
  const RandomForRefresh = arr => {
    return Math.floor(Math.random() * arr.length);
  };
  const RefreshNumber = Numbers[RandomForRefresh(Numbers)];
  const RefreshSymbol = Symbols[RandomForRefresh(Symbols)];

  document.querySelector("#Number1").innerHTML = RefreshNumber;
  document.querySelector("#Number2").innerHTML = RefreshNumber;
  document.querySelector("#icon").innerHTML = RefreshSymbol;
});

// Select card.
let Scolor = document.querySelector("#SelectColor");
let Snumber = document.querySelector("#SelectNumber");
const buttonselect = document.querySelector("#buttonselect");

buttonselect.addEventListener("click", e => {
  document.querySelector("#Number1").innerHTML = Snumber.value;
  document.querySelector("#Number2").innerHTML = Snumber.value;
  document.querySelector("#icon").innerHTML = Scolor.value;

  //PROBLEMA, LA PRIMERA VEZ QUE ELIJO LA CARTA ME CAMBIA EL COLOR, PERO LUEGP SE MANTIENE ESE COLOR TODO EL RATO
  const Slcolor = v => {
    if (Scolor.value == "♥" || Scolor.value == "♦") {
      document.querySelector("#icon").style.color = "red";
    }
  };
  Slcolor();
});
