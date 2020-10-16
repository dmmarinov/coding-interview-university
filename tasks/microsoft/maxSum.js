/* Write a function solution that, given an array A consisting of N integers,
returns the maximum sum of two numbers whose digits add up to an equal sum.
If there are no two numbers whose digits have an equal sum, the function should return -1.

Examples:
Given A = [51, 71, 17, 42], the function should return 93. There are two pairs of numbers whose digits add up to an equal sum: (51, 42) and (17, 71). The first pair sums up to 93.
Given A = [42, 33, 60], the function should return 102. The digits of all the numbers in A add up to the same sum, and choosing to add 42 and 60 gives the result 102.
Given A = [51, 32, 43], the function should return -1, since all numbers in A have digits that add up to different, unique sums. */

function maxSum(arr) {
  const myMap = new Map();
  arr.forEach(element => {
    const sum = String(element).split('').reduce((acc, el) => parseInt(acc) + parseInt(el));

    if (myMap.has(sum)) {
      myMap.get(sum).push(element);
    } else {
      myMap.set(sum, [element]);
    }
  });

  let res = -Infinity;
  myMap.forEach((val, key) => {
    if (key > res && val.length > 1) {
      let maxFirst = -Infinity;
      let maxSecond = -Infinity;

      val.forEach((el) => {
        if (el > maxFirst) {
          if (maxFirst > maxSecond) {
            maxSecond = maxFirst;
          }
          maxFirst = el;
        } else if (el > maxSecond) {
          maxSecond = el;
        }
      });

      const sum = maxFirst + maxSecond;

      if (sum > res) {
        res = sum;
      }
    }
  })

  return (res === -Infinity) ? -1 : res;
}

console.log(maxSum([51, 71, 17, 42]));
console.log(maxSum([42, 33, 60]));
console.log(maxSum([51, 32, 43]));