let money = 1200;
let income = 'ebay';
let addExpenses = 'Appartment, Insurance, Loan';
let deposit = true;
let mission = 25;
let period = 7;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpenses.length);
console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = (money / 30);

console.log(budgetDay);
