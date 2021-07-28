"use strict";

function solveEquation(a, b, c) {
  let arr;
  
  //ввод не контролируем
  const discriminant = (b ** 2) - (4 * a * c);

  if (discriminant < 0) {
    arr = [];    
  } else if (discriminant === 0) {
    arr = [(-b/(2 * a))];
  } else {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr = [x1, x2];
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  //Проверяем числовой ввод
  const percentNum = parseFloat(percent);
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
  const restToPay = amountNum - contributionNum;
  //создаём сегодняшную дату, берем число месяцев и лет
  const today = new Date();
  const todayM = today.getMonth();
  const todayY = today.getFullYear();
  //проверяем валидность введенной даты
  if (isNaN(date.getTime())) {
    console.log('Введите корректную дату');
    return 'Введите корректную дату';
  } 
  const dateY = date.getFullYear();
  const dateM = date.getMonth();
  //определяем число месяцев
  let totalMonths = (dateM + 12 * dateY) - (todayM + 12 * todayY);
  //приводим проценты к долям, рассчитываем месячный платёж
  const monthPercent = percentNum / 100 / 12;
  const paymentPerMonth = restToPay * ((monthPercent) + ((monthPercent) / (((1 + (monthPercent)) **totalMonths) - 1)));
  //рассчитываем сумму всех платежей по кредиту, отрезаем нули и переводим в числовой формат
  totalAmount = totalMonths * paymentPerMonth;
  totalAmount = +totalAmount.toFixed(2);

  return totalAmount;
}
