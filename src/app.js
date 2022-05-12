import "./style.css";

window.onload = function() {};

// Random number and icon functions

const Numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const Symbols = ["♣", "♠", "♥", "♦"];

// values for start....................................................

const Random = arr => {
  return Math.floor(Math.random() * arr.length);
};
const Number_Start = Numbers[Random(Numbers)];
const Icon_Start = Symbols[Random(Symbols)];

// Icon and Numbers querySelector for Start..........................
document.querySelector("#Number1").innerHTML = Number_Start;
document.querySelector("#Number2").innerHTML = Number_Start;
document.querySelector("#icon").innerHTML = Icon_Start;

// Color Start.......................................................
const color = v => {
  if (Icon_Start == "♥" || Icon_Start == "♦") {
    document.querySelector("#icon").style.color = "red";
  }
};
color();

// Refresh botton....................................................
// target refresh button and card
const buttonRefresh = document.querySelector("#buttonRefresh");
const card = document.querySelector(".card");

// Events for refresh button
buttonRefresh.addEventListener("click", e => {
  // Generate numbers and symbols. And target in html
  const RefreshNumber = Numbers[Random(Numbers)];
  const RefreshSymbol = Symbols[Random(Symbols)];
  document.querySelector("#Number1").innerHTML = RefreshNumber;
  document.querySelector("#Number2").innerHTML = RefreshNumber;
  document.querySelector("#icon").innerHTML = RefreshSymbol;

  // remove and add animations

  window.requestAnimationFrame(function() {
    card.classList.add("rotate");
    setTimeout(() => {
      card.classList.remove("rotate");
    }, 500);
  });
  // Change color in sumbols
  const color = v => {
    if (RefreshSymbol == "♥" || RefreshSymbol == "♦") {
      document.querySelector("#icon").style.color = "red";
    } else {
      document.querySelector("#icon").style.color = "white";
    }
  };
  color();
});

// Select card.......................................................
const Scolor = document.querySelector("#SelectColor");
const Snumber = document.querySelector("#SelectNumber");
const buttonselect = document.querySelector("#buttonselect");

buttonselect.addEventListener("click", e => {
  window.requestAnimationFrame(function() {
    card.classList.add("rotate");
  });
  setTimeout(() => {
    card.classList.remove("rotate");
  }, 500);
  document.querySelector("#Number1").innerHTML = Snumber.value;
  document.querySelector("#Number2").innerHTML = Snumber.value;
  document.querySelector("#icon").innerHTML = Scolor.value;
  card.classList.remove("rotate");
  Slcolor();
});

const Slcolor = () => {
  if (Scolor.value == "♥" || Scolor.value == "♦") {
    document.querySelector("#icon").style.color = "red";
  } else {
    document.querySelector("#icon").style.color = "white";
  }
};

const smallsize = () => {
  document.querySelector(".card").style.width = "40%";
  document.querySelector(".card").style.height = "40%";
  document.querySelector(".card").style.height = "40%";
  document.querySelector("#div_Number1").style.fontSize = "2rem";
  document.querySelector(".div_Icon").style.fontSize = "2rem";
  document.querySelector("#div_Number2").style.fontSize = "2rem";
  card.classList.remove("rotate");
};
const middlesize = () => {
  document.querySelector(".card").style.width = "80%";
  document.querySelector(".card").style.height = "80%";
  document.querySelector("#div_Number1").style.fontSize = "5rem";
  document.querySelector(".div_Icon").style.fontSize = "6rem";
  document.querySelector("#div_Number2").style.fontSize = "5rem";
  card.classList.remove("rotate");
};
const biggersize = () => {
  document.querySelector(".card").style.width = "120%";
  document.querySelector(".card").style.height = "120%";
  document.querySelector("#div_Number1").style.fontSize = "8rem";
  document.querySelector(".div_Icon").style.fontSize = "9rem";
  document.querySelector("#div_Number2").style.fontSize = "8rem";
  card.classList.remove("rotate");
};

const smallsizebutton = document.querySelector("#small");
const middlesizebutton = document.querySelector("#middle");
const biggersizebutton = document.querySelector("#bigger");

smallsizebutton.addEventListener("click", e => {
  smallsize();
});

middlesizebutton.addEventListener("click", e => {
  middlesize();
});
biggersizebutton.addEventListener("click", e => {
  biggersize();
});
