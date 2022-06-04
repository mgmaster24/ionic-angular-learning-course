const reasonInput = document.getElementById('reason');
const amountInput = document.getElementById('amount');
const clearButton = document.getElementById('cancel');
const addExpenseButton = document.getElementById('add-expense');
const expensesList = document.getElementById('expenses-list');
const totalExpenses = document.getElementById('total-expenses');

let total = 0;

async function presentAlert() {
  const alert = document.createElement('ion-alert');
  alert.header = 'Invalid Inputs';
  alert.message = 'Please enter values for Reason and Amount.';
  alert.buttons = ['OK'];

  document.body.appendChild(alert);
  await alert.present();
}

const clear = () => {
  reasonInput.value = '';
  amountInput.value = '';
};

addExpenseButton.addEventListener('click', () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    presentAlert();
    return;
  }

  const newItem = document.createElement('ion-item');
  newItem.textContent = enteredReason + ': $' + enteredAmount;
  expensesList.appendChild(newItem);
  clear();
  total += parseInt(enteredAmount);
  totalExpenses.textContent = `$${total}`;
});

clearButton.addEventListener('click', clear);