/*
* Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u», «y».
* */

function getVowelsCount(str) {
    let kol = 0;
    for (const s of str){
        if (s=="a" || s=="e" || s=="i" || s=="o" || s=="u" || s=="y"){
            kol ++;
        }
    }
    return kol;
}


console.log(getVowelsCount("adafwfer"));
module.exports = getVowelsCount