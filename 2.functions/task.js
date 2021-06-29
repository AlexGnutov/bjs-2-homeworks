// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;

  min = 101;
  max = -101;
  sum = 0;

  let arrayLength = arr.length;

  for (let i = 0; i < arrayLength; i += 1) {
    let x = arr[i];
    if (x > max) {
      max = x;
    }
    if (x < min) {
      min = x;
    }
    sum +=x;
  }

  avg = (sum / arrayLength).toFixed(2);
  
  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }  

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  max = func(arrOfArr[0]);
  for (let i = 1; i < arrOfArr.length; i += 1) {
    let arSum = func(arrOfArr[i]);
    if (arSum > max) {
      max = arSum;
    }
  } 

  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    let x = arr[i];
    if (x < min) {
      min = x;
    }
    if (x > max) {
      max = x;
    }
  }
  
  let minmax = max - min;
  return minmax;  
}
