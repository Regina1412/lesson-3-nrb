/*
* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, (округлить результат до десятых)
* */

function abs(array) {
    const arr = array.length;
    let kol = 0;
    for (let i=0; i<arr;i++)
    {
        kol+=array[i];
    }
    const Sr = kol/arr*10;
    return Math.round(Sr)/10;
}

console.log(abs([6,2,3,4,5]));
module.exports = abs