const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const hight = parseInt(document.querySelector("#Hight").value);
  const weight = parseInt(document.querySelector("#Weight").value);
  const result = document.querySelector("#Result");

  if (hight === "" || hight < 0 || isNaN(hight)) {
    result.textContent = `hight value is not applicable s${hight}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.textContent = `hight value is not applicable s${weight}`;
  } else {
    result.textContent = (weight / (hight ** 2 / 10000)).toFixed(2);
  }
});
