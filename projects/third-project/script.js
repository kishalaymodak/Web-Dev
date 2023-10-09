const box = document.querySelectorAll(".box");
const body = document.querySelector("body");

// const Color = window
//   .getComputedStyle(document.getElementById("red"), null)
//   .getPropertyValue("background-color");
// console.log(Color);
box.forEach(function (box) {
  box.addEventListener("click", function (e) {
    // console.log(e);
    if (e.target.id === "red") {
      body.style.backgroundColor = window
        .getComputedStyle(e.target, null)
        .getPropertyValue("background-color");
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = window
        .getComputedStyle(e.target, null)
        .getPropertyValue("background-color");
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = window
        .getComputedStyle(e.target, null)
        .getPropertyValue("background-color");
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = window
        .getComputedStyle(e.target, null)
        .getPropertyValue("background-color");
    }
  });
});
