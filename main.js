//Global variables
const clearButton = document.querySelector('.clear');
const calculateButton = document.querySelector('.calculate');
const form = document.querySelector('.form');
const billAmount = document.querySelector('.bill-amount');
const tipPercentage = document.querySelector('.tip-percentage');
const billSplit = document.querySelector('.bill-split');
const tipTotalP = document.querySelector('.tip-total');
const billTotalP = document.querySelector('.bill-total');
const splitTotalP = document.querySelector('.split-total');
const results = document.querySelector('.results');

//Event listeners
form.addEventListener('submit', validate);
clearButton.addEventListener('click', clear);

function calculate() {
    const tipTotal = Number(billAmount.value) * (Number(tipPercentage.value) / 100);
    const billTotal = Number(billAmount.value) + tipTotal;
    const splitTotal = Number(billTotal) / Number(billSplit.value);

    tipTotalP.textContent = `Tip Amount: $ ${tipTotal.toFixed(2)}`;
    billTotalP.textContent = `Total Bill: $ ${billTotal.toFixed(2)}`;
    splitTotalP.textContent = `Each Person Owes: $ ${splitTotal.toFixed(2)}`;
    results.style.visibility = 'visible';

}

function clear() {
    form.reset();
    results.style.visibility ='hidden';

}

function validate(e) {
    const billError = document.querySelector('.bill-error');
    if (billAmount.validity.valueMissing) {
        billError.textContent = 'Please enter a bill amount';
    } else if (billAmount.validity.typeMismatch) {
        billError.textContent = 'Please enter a numeric value';
    } else if (billAmount.validity.rangeUnderflow) {
        billError.textContent = 'Bill amount must greater than zero';
    } else if (billAmount.validity.valid) {
        billError.textContent = '';
    }

    const tipError = document.querySelector('.tip-error');
    if (tipPercentage.validity.valueMissing) {
        tipError.textContent = 'Please enter a tip percentage';
    } else if (tipPercentage.validity.typeMismatch) {
        tipError.textContent = 'Please enter a numeric value';
    } else if (tipPercentage.validity.rangeUnderflow) {
        tipError.textContent = 'Tip percentage must be greater than zero';
    } else if (tipPercentage.validity.valid) {
        tipError.textContent = '';
    }

    const splitError = document.querySelector('.split-error');
    if (billSplit.validity.valueMissing) {
        splitError.textContent = 'Please enter how many people';
    } else if (billSplit.validity.typeMismatch) {
        splitError.textContent = 'Please enter a numeric value';
    } else if (billSplit.validity.rangeUnderflow) {
        splitError.textContent = 'Split amount must be one or greater';
    } else if (billSplit.validity.valid) {
        splitError.textContent = '';
    }

    if (billAmount.validity.valid && tipPercentage.validity.valid && billSplit.validity.valid) {
        e.preventDefault()
        calculate();
    } else if (!billAmount.validity.valid || !tipPercentage.validity.valid || !billSplit.validity.valid) {
        e.preventDefault();
    }
}