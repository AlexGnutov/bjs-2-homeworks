function compareArrays(arr1, arr2) {
  let result;

  if (arr1.length === arr2.length) {
    result = arr1.every((value, index) => value === arr2[index]);
  } else {
    result = false;
  }
  
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter(x => ((x > 0) && ((x % 3) === 0))).map(x => x * 10);
  return resultArr; // array
}
