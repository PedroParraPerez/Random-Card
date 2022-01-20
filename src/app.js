import "./style.css";

window.onload = function() {};

// Eleccion del numero y del palo
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Symbols = ["diamond", "spade", "hearth", "club"];

const Random = arr => {
  return Math.floor(Math.random() * arr.length);
};
console.log(Numbers[Random(Numbers)]);
console.log(Symbols[Random(Symbols)]);
