const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/"
];

let button = document.getElementById("btn1");
let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");

function randomGenerator() {
  let password = "";
  for (let i = 0; i < 12; i++) {
    let randomIndexOne = Math.floor(Math.random() * characters.length);
    password = characters[randomIndexOne] + password;
  }
  return password;
}

function showPassword() {
  pass1.textContent = randomGenerator();
  pass2.textContent = randomGenerator();
}

pass1.onclick = function () {
  document.execCommand("copy");
};

pass1.addEventListener("copy", function (event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", pass1.textContent);
    console.log(event.clipboardData.getData("text"));
  }
});

pass2.onclick = function () {
  document.execCommand("copy");
};

pass2.addEventListener("copy", function (event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", pass2.textContent);
    console.log(event.clipboardData.getData("text"));
  }
});
