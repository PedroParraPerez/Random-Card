import "./style.css";

window.onload = function() {};

// Random num and icon.
const Numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const Symbols = ["♣", "♠", "♥", "♦"];

const Random = arr => {
  return Math.floor(Math.random() * arr.length);
};

const Number_Final = Numbers[Random(Numbers)];
const Icon_Final = Symbols[Random(Symbols)];

// Icon and Numbers.
document.querySelector("#Number1").innerHTML = Number_Final;
document.querySelector("#Number2").innerHTML = Number_Final;
document.querySelector("#icon").innerHTML = Icon_Final;

const color = v => {
  if (Icon_Final == "♥" || Icon_Final == "♦") {
    document.querySelector("#icon").style.color = "red";
  }
};
color();
// Refresh botton

const button = document.querySelector(".button");
button.addEventListener("click", e => {
  console.log("enviar");
//   No consigo ejecutar las funciones randoms al presionar el boton pero al pulsar el boton si que reacciona y escribe en la consola enviar
});
