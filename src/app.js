import "./style.css";

window.onload = function() {};

// Random number and icon functions

const Numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const Symbols = ["♣", "♠", "♥", "♦"];

// values for start

const Random = arr => {
  return Math.floor(Math.random() * arr.length);
};
const Number_Start = Numbers[Random(Numbers)];
const Icon_Start = Symbols[Random(Symbols)];

// Icon and Numbers querySelector for Start
document.querySelector("#Number1").innerHTML = Number_Start;
document.querySelector("#Number2").innerHTML = Number_Start;
document.querySelector("#icon").innerHTML = Icon_Start;

// Color Start
const color = v => {
  if (Icon_Start == "♥" || Icon_Start == "♦") {
    document.querySelector("#icon").style.color = "red";
  }
};
color();

// Refresh botton

const buttonRefresh = document.querySelector(".buttonRefresh");
const card = document.querySelector(".card");

buttonRefresh.addEventListener("click", e => {
  const RefreshNumber = Numbers[Random(Numbers)];
  const RefreshSymbol = Symbols[Random(Symbols)];
  document.querySelector("#Number1").innerHTML = RefreshNumber;
  document.querySelector("#Number2").innerHTML = RefreshNumber;
  document.querySelector("#icon").innerHTML = RefreshSymbol;

  card.classList.remove("rotate");
  window.requestAnimationFrame(function() {
    card.classList.add("rotate");
  });

  const color = v => {
    if (RefreshSymbol == "♥" || RefreshSymbol == "♦") {
      document.querySelector("#icon").style.color = "red";
    } else {
      document.querySelector("#icon").style.color = "white";
    }
  };
  color();
});

// Select card.
const Scolor = document.querySelector("#SelectColor");
const Snumber = document.querySelector("#SelectNumber");
const buttonselect = document.querySelector("#buttonselect");

const Slcolor = v => {
  if (Scolor.value == "♥" || Scolor.value == "♦") {
    document.querySelector("#icon").style.color = "red";
  } else {
    document.querySelector("#icon").style.color = "white";
  }
};

buttonselect.addEventListener("click", e => {
  document.querySelector("#Number1").innerHTML = Snumber.value;
  document.querySelector("#Number2").innerHTML = Snumber.value;
  document.querySelector("#icon").innerHTML = Scolor.value;
  card.classList.remove("rotate");
  window.requestAnimationFrame(function() {
    card.classList.add("rotate");
  });
  Slcolor();
});
