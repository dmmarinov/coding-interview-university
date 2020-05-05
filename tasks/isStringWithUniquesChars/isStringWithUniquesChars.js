/* Example:
 * Input : abcd10jk -> Output : true
 * Input : hutg9mnd!nk9 -> Output : false
 */

/* Soulition using additional JS Data structure Set
 * Which can have only unique values
 * Let's create a set and compare lengths of
 * set and the original string. If equal -> string is unique
 *
 * Time Complexity: O(n)
 */
const isUnique = (str) => {
  const set = new Set(str);

  return str.length === set.size;
};

/* Without using additional data structures
 * Let's bruteforce it iterating over the string
 * with 2 for loops and if duplicate is found
 * return false, otherwise return true
 *
 * Time Complexity: O(n^2)
 */
const isUniqueRaw = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }

  return true;
};

/* By sorting a string using ASCII values
 *
 * If next value is the same ASCII code as the previous,
 * the string is not unique -> return false,
 * otherwise -> return true
 *
 * Time Complexity: O(n log n)
 */

const isUniqueASCIIWay = (str) => {
  const arr = str.split('');
  const sorted = arr.sort();

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    }
  }

  return true;
}

/* Let's maintain boolean array of
 * 256 indices representing 256 characters.
 * Let's set the indice of char code we have met with true,
 * And check, if it's alreaty true -> string is not of unique characters
 *
 * Time Complexity: O(n)
 */
const isUniqueBoolArr = (str) => {
  const CHARACTERS_COUNT = 256;
  const arr = new Array(CHARACTERS_COUNT).fill(false);

  for (let i = 0; i < str.length; i++) {
    const code = str[i].charCodeAt(0);

    if (arr[code]) {
      return false;
    }

    arr[code] = true;
  }

  return true;
};
