const maximum = (arr, max = -Infinity) => {
  if (arr.length === 0) {
    return max;
  }

  const elem = arr.pop();

  if (elem > max) {
    max = elem;
  }

  return maximum(arr, max);
};

const arr = [-1,-2,-3,430,2,434,456,2,0];
console.log(maximum(arr));