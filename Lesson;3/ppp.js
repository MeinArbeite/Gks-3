// 1 meinste aufgabe
var numbers = "123456789"
console.log(numbers);
for(var i=numbers.length - 1; i >= 0; i--) {
        var cardDigit = numbers[i]
        console.log(cardDigit);
    }3456

// 2 zweite aufgabe
 
const number = parseInt(prompt("Напишите положительное число"))

let sum = 0

for (let i = 1; i <= number; i++) {
    sum += i
}


console.log("Сумма всех чисел от 1 до" + number + "это"+ sum)

// 3 dritte aufgabe

let a = 1

let  summa = 0

while(a <= 9) {
    if(a % 2 !== 0) {
        summa += a
    }
    a++
}
console.log(summa);

// 4 fürte aufgabe
const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]

for (let n = 0; n < days.length; n++) {
    if (n < 5) {
        console.log(days[n].toLocaleLowerCase());
    }else {
        console.log(days[n].toLocaleUpperCase());
    }
}

