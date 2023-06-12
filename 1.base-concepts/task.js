"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  let x = 0;
  let y = 0;
  
  if (d < 0) {
    return arr;
  } else if (d === 0) {
    x = -b/(2*a);
    arr.push(x);    
  } else if (d > 0) {
    x = (-b + Math.sqrt(d) )/(2*a);
    y = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x,y);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = (percent / 100) / 12;
  let credit = amount - contribution;
  let payment = credit * (percent + (percent / (((1 + percent)**countMonths) - 1)));
  let sum = (payment * countMonths).toFixed(2);
  let num = Number(sum);
  return num;
}