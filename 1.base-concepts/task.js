"use strict";

function solveEquation(a, b, c) {
  let arr;
  
  //ввод не контролируем
  let discriminant = (b ** 2) - (4 * a * c);

  if (discriminant < 0) {
    arr = [];    
  } else if (discriminant === 0) {
    arr = [(-b/(2 * a))];
  } else {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr = [x1, x2];
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  //Проверяем числовой ввод
  let percentNum = parseFloat(percent);
  if (isNaN(percentNum)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  let contributionNum = parseFloat(contribution);
  if (isNaN(contributionNum)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  let amountNum = parseFloat(amount);
  if (isNaN(amountNum)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  //считаем остаток после оплаты первого взноса
  let restToPay = amountNum - contributionNum;
  //создаём сегодняшную дату, берем число месяцев и лет
  let today = new Date();
  let todayM = today.getMonth();
  let todayY = today.getFullYear();
  //проверяем валидность введенной даты
  if (isNaN(date.getTime())) {
    console.log('Введите корректную дату');
    return 'Введите корректную дату';
  } 
  let dateY = date.getFullYear();
  let dateM = date.getMonth();
  //определяем число месяцев
  let totalMonths = (dateM + 12 * dateY) - (todayM + 12 * todayY);
  //приводим проценты к долям, рассчитываем месячный платёж
  percentNum *= 0.01;
  let paymentPerMonth = restToPay * ((percentNum / 12) + ((percentNum / 12) / (((1 + (percentNum / 12)) **totalMonths) - 1 )));
  //рассчитываем сумму всех платежей по кредиту, отрезаем нули и переводим в числовой формат
  totalAmount = totalMonths * paymentPerMonth;
  totalAmount = +totalAmount.toFixed(2);

  return totalAmount;
}
