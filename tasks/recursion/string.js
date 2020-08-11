const reverseString = function(s) {
  helper(s, 0, s.length - 1)
  return s;
};

const helper = (s, left, right) => {
  if (left >= right) {
      return;
  }

  let temp = s[left];
  s[left++] = s[right]
  s[right--] = temp;

  return helper(s, left, right);
}

const a = reverseString(['a','b','c','d','e','f']);
console.log(a);