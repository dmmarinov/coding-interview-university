
/* You are given a string S consisting of N letters ‘a’ and/or ‘b’.
In one move, you can swap one letter for the other (‘a’ for ‘b’ or ‘b’ for ‘a’).
Write a function solution that, given such a string S,
returns the minimum number of moves required to obtain a string containing no instances
of three identical consecutive letters.

Examples:
Given S = “baaaaa” , the function should return 1. The string without three identical consecutive letters which can be obtained in one move is “baabaa”.
Give S = “baaabbaabbba” , the function should return 2. There are four valid strings obtainable in two moves: for example, “bbaabbaabbaa” .
Given S = “baabab” , the function should return 0.*/
function changeConsecutiveLetters(str) {
  if (str.length < 3) {
    return str;
  }

  const lastChar = {
    char: str[0],
    count: 1,
  };
  let res = 0;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === lastChar.char) {
      if (lastChar.count < 3) {
        lastChar.count++;
      } else {
        lastChar.count = 1;
        lastChar.char = (lastChar.char === 'a') ? 'b' : 'a';
        res++;
      }
    } else {
      lastChar.char = str[i];
    }
  }

  return res;
}

console.log(changeConsecutiveLetters("baaaaa"));
console.log(changeConsecutiveLetters("baaabbaabbba"));
console.log(changeConsecutiveLetters("baabab"));
