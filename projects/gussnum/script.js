let random = parseInt(Math.random() * 100 + 1);

const sub = document.querySelector("#sub");
const num = document.getElementById("num");
const prev = document.getElementById("prev");
const remainng = document.getElementById("guess-r");
const highorlow = document.getElementById("high-low");
const score = document.getElementById("opfild");

const button = document.createElement("div");
let prevguess = [];
let numguess = 1;

let playgame = true;
if (playgame) {
  sub.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(num.value);
    console.log(guess);
    validate(guess);
  });
}
function validate(guess) {
  if (isNaN(guess)) {
    displaymessage(`Wrong input`);
  } else if (guess < 0) {
    displaymessage(`wrong input`);
  } else if (guess > 100) {
    displaymessage(`wrong input`);
  } else {
    prevguess.push(guess);
    if (numguess === 11) {
      displaysguess(guess);
      displaymessage(`The Random number is ${random}`);
      endgame();
    } else {
      displaysguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === random) {
    displaymessage("You Guessed it !!!");
    endgame();
  } else if (guess > random) {
    displaymessage("Number is too high");
  } else if (guess < random) {
    displaymessage("Number is too low");
  }
}
const live = (numguess) => {
  if (numguess > 11) {
    return "Game End";
  } else {
    return `${11 - numguess}`;
  }
};

function displaysguess(guess) {
  num.value = "";
  prev.innerHTML += `${guess}, `;
  numguess++;
  remainng.innerHTML = `${live(numguess)}`;
}
function displaymessage(message) {
  highorlow.innerHTML = `<h3>${message}</h3>`;
}
function endgame() {
  num.value = "";
  button.classList.add(
    "p-2",
    "bg-indigo-300",
    "rounded-md",
    "font-semibold",
    "shadow-md",
    "mt-2",
    "md:text-xl",
    "text-center",
    "hover:cursor-pointer"
  );
  button.setAttribute("id", "play-again");
  num.setAttribute("disabled", "");
  button.innerHTML = "play again";
  score.appendChild(button);
  playgame = false;
  startgame();
}
function startgame() {
  const playagain = document.getElementById("play-again");
  playagain.addEventListener("click", function (e) {
    random = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numguess = 1;
    remainng.innerHTML = `${11 - numguess}`;
    prev.innerHTML = "";
    highorlow.innerHTML = "";
    num.removeAttribute("disabled");
    score.removeChild(button);

    playgame = true;
  });
}
