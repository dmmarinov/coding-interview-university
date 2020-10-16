/* Write a function solution that, given a string S of N lowercase English letters,
returns a string with no instances of three identical consecutive letters,
obtained from S by deleting the minimum possible number of letters.

Examples:
Given S = “eedaaad” , the function should return “eedaad” . One occurrence of letter a is deleted.
Given S = “xxxtxxx” , the function should return “xxtxx” . Note that letter x can occur more than three times in the returned string, if the occurrences are not consecutive.
Given S = “uuuuxaaaaxuuu” , the function should return “uuxaaxuu”. */

function removeConsecutiveLetters(str) {
  if (str.length < 3) {
    return str;
  }

  const arr = [str[0]];
  const lastChar = {
    char: str[0],
    count: 1,
  };

  for (let i = 1; i < str.length; i++) {
    if (str[i] === lastChar.char) {
      lastChar.count++;

      if (lastChar.count < 3) {
        arr.push(str[i]);
      }
    } else {
      arr.push(str[i]);
      lastChar.count = 1;
    }

    lastChar.char = str[i];
  }

  return arr.join('');
}

console.log(removeConsecutiveLetters("eedaaad"));
console.log(removeConsecutiveLetters("xxxtxxx"));
console.log(removeConsecutiveLetters("uuuuxaaaaxuuu"));
