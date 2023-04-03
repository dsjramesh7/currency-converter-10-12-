const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeEl = document.getElementById("exchange");

updateElement();

function updateElement() {
  fetch(
    `https://v6.exchangerate-api.com/v6/6c13b75f665dde9293e25edc/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEl.value];
      console.log(rate);
      exchangeEl.innerText = `1 ${currencyFirstEl.value} = ${
        rate + " " + currencySecondEl.value
      }`;

      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    });
}

currencyFirstEl.addEventListener("change", updateElement);

worthFirstEl.addEventListener("change", updateElement);

currencySecondEl.addEventListener("change", updateElement);
