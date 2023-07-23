const contentDiv = document.querySelector("#content");
const amount = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const convertButton = document.querySelector("#convertButton");
const result = document.querySelector("#result");


runEventListeners();

function runEventListeners() {
    convertButton.addEventListener("click",convert);
    contentDiv.addEventListener("keyup",(event) => {
        if(event.keyCode === 13) {
            convert();
        }
    });
}

const currency = new Currency();

function convert() {
    let moneyAmount = Number(amount.value.trim());
    let selectedFirstOption = firstOption.options[firstOption.selectedIndex].textContent;
    let selectedSecondOption = secondOption.options[secondOption.selectedIndex].textContent;

    let resultAmount = currency.exchange(moneyAmount,selectedFirstOption,selectedSecondOption)
    .then((data) =>{
        result.value = (data*moneyAmount).toFixed(3);
    })

    





}