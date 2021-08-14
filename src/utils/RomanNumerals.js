export default class RomanNumerals {
  //https://shareablecode.com/snippets/simple-validation-function-javascript-check-string-valid-roman-numeral-not-regex-D2dN-U2DP
  static isRoman = (s) => {
    const pattern =
      /^(M{1,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|C?D|D?C{1,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|X?L|L?X{1,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|I?V|V?I{1,3}))$/;
    return pattern.test(s.toUpperCase());
  };

  static fromRoman = (s) => {
    const romanLetters = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    s = s.toUpperCase();
    let total = 0;

    if (s.length === 0) return '';
    if (!this.isRoman(s)) throw new Error('Invalid Roman format');

    let letters = s.split('').reverse();
    for (const [index, currentLetter] of letters.entries()) {
      if (romanLetters[currentLetter] < romanLetters[letters[index - 1]]) {
        total -= romanLetters[currentLetter];
      } else if (
        romanLetters[currentLetter] >= romanLetters[letters[index - 1]] ||
        typeof romanLetters[letters[index - 1]] == 'undefined'
      ) {
        total += romanLetters[currentLetter];
      }
    }
    return total.toString();
  };

  static toRoman = (s) => {
    const units = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C'];
    const hundredth = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M'];
    const thousandth = ['', 'M', 'MM', 'MMM'];

    let romans = [];

    // eslint-disable-next-line eqeqeq
    if (s == 0 || s.length === '') return '';

    if (s <= 0)
      throw new Error(
        'There are no negative integers in roman numerals. Please use positve integers only',
      );

    if (parseInt(s) > 3999) throw new Error('Out of range. Only coverts uptill 3999');
    let letters = s.split('').reverse();

    for (const [index, digit] of letters.entries()) {
      switch (index) {
        case 0:
          romans.unshift(units[digit]);
          break;
        case 1:
          romans.unshift(tens[digit]);
          break;
        case 2:
          romans.unshift(hundredth[digit]);
          break;
        default:
          romans.unshift(thousandth[digit]);
          break;
      }
    }
    return romans.join('');
  };
}
