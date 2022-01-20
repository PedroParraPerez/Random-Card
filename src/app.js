/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

// Eleccion del numero y del palo
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const Symbols = ["diamond", "spade", "hearth", "club"];

const Random = arr => {
  return Math.floor(Math.random() * arr.length);
};
console.log(Numbers[Random(Numbers)]);
console.log(Symbols[Random(Symbols)]);
