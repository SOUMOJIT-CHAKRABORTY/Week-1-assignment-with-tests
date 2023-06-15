/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

const isAnagram = (str1, str2) => {
  if (doSort(str1) === doSort(str2)) {
    return true;
  } else return false;
};

const doSort = (str) => {
  let split = str.toLowerCase().split("");
  return split.sort().join("");
};

module.exports = isAnagram;
