/*
*  Если мы получили палиндром, функция должна вернуть значение true. Если же нет — false.
* */

function isPalindrome(str) {
    const reverseStr = str.split('').reverse().join('');
    return str === reverseStr;
}
console.log(isPalindrome("andna"));
module.exports = isPalindrome