const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const num = document.getElementById("num");
const ans = document.getElementById("ans");

fetch("https://api.frankfurter.app/currencies")
  .then((response) => response.json())
  .then((data) => {
    display(data);
  })
  .catch((error) => {
    console.error('Error fetching currencies:', error);
  });

function display(data) {
  const entries = Object.keys(data);
  entries.forEach((currency) => {
    select[0].innerHTML += `<option value="${currency}">${currency}</option>`;
    select[1].innerHTML += `<option value="${currency}">${currency}</option>`;
  });
}

btn.addEventListener("click", () => {
  let currency1 = select[0].value;
  let currency2 = select[1].value;
  let value = num.value;

  if (currency1 !== currency2) {
    convert(currency1, currency2, value);
  } else {
    alert("Choose Different Currencies !!!");
  }
});

function convert(currency1, currency2, value) {
  fetch(`https://api.frankfurter.app/latest?amount=${value}&from=${currency1}&to=${currency2}`)
    .then((response) => response.json())
    .then((data) => {
      ans.value = (data.rates[currency2] * value).toFixed(2);
    })
    .catch((error) => {
      console.error('Error converting currencies:', error);
    });
}
