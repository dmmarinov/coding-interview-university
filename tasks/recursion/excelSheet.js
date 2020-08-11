const titleToNumber = function(s) {
  const arr = s.split('');
  return helper(arr, 0, s.length - 1);
};

const helper = (arr, sum, len) => {
  if (!arr.length) {
      return sum;
  }

  const elem = arr.shift();
  const position = elem.charCodeAt(0) - 64;
  sum += 26 ** len * position;
  len--;

  return helper(arr, sum, len);
}

const x = titleToNumber('AAA');
console.log(x);