let principal2 = prompt("Enter the principal amount:");
let rate2 = prompt("Enter the rate of interest (in percentage):");
let time2 = prompt("Enter the time period (in years):");
let compoundInterest = principal2 * (Math.pow((1 + rate2 / 100), time2)) - principal2;
alert("Compound Interest: $" + compoundInterest);