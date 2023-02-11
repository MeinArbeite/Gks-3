console.log([] === []);
console.log([] == []);

var a = 5;
var b = a;

console.log("a =", a, "b= ",b);
b = 10;
console.log("a =", a, "b =",b);

var a2 =[1,2,3];
var b2 =a2;
console.log("a2 =", a2, "b2 =",b2);
b2.push(4)
a2.push(5)
console.log("a2 =", a2, "b2 =",b2);
console.log("a2 == b2 ?", a2 === b2);

console.log(document.all);


// Array.isArray

// var i = 0;

// while (i < 10) {
//     console.log(i++);
// }

var numbers = [5,4,7,1,2,8,4]

var i = 0;
while(i < numbers.length) {
    console.log(numbers[i]);

    if (numbers[i] === 2) break;
    i++;

}

var balances = [0, 0.5, -200, 0, 110, 12, 4, -500];

var sum = 0;
var debts = 0;
var debtsSum = 0
for (const balance of balances.reverse()) {
if(balance >= 0){
    sum += balance;
    continue;
}
        debts++
        debtsSum += balance
    
}
console.log("Bank income =", sum, "Debts = ", debts, "Debts sum = ", debtsSum);


// var cardPan = '234567898765438';
// console.log(cardPan); //PAN - Personal Acces Number 
 //CVC - Customer Verification Code
//Bin - Bank Identification Number


//ТОЛЬКО; ВЫВЕСТИ ЧИСЕЛ В КОНСОЛЬ С КОНЦА К НАЧАЛУ; НАПРИМЕР; 987654321

// for(var i=cardPan.length - 1; i >= 0; i--) {
//     var cardDigit = cardPan[i]
//     console.log(cardDigit);
// }

// ТОЛЬКО; ВЫВЕСТИ ЧИСЕЛ НАОБОРОТ С КОНЦА К НАЧАЛУ; НАПРИМЕР; 987654321; УМНОЖАЯ ЧЕРЕЗ ЧЕРЕЗ НАПРИМЕР; 9, 8*2=16, 7, 6*2=12, 5, 4*2=8, 3, 2*2=4, 1.; 
// var isFirst = false
// for (var i = cardPan.length - 1; i >= 0; i--) {
//      var cardDigit = Number(cardPan[i])
//      var doubledDigit;
//     if (isFirst) {
//     doubledDigit = cardDigit * 2;
//     console.log(cardDigit, doubledDigit);
//     }
//     isFirst = !isFirst
// }

//

var cardPan = '79927398713'
var isSecond = false;
var cardPanSum = 0;
console.log(cardPan);
for (var i = cardPan.length - 1; i >=0; i--) {
    var cardDigit = Number(cardPan[i]);
    var doubledDigit;
    if (isSecond) {
        doubledDigit = cardDigit * 2; //2 -> 02 -> 0 + 2; 16 -> 1 + 6
        var doubledDigitAsString = doubledDigit.toString().padStart(2,"0")
        var secondSum = 
          Number(doubledDigitAsString[0]) + Number(doubledDigitAsString[1])
        cardPanSum += secondSum;
        console.log(cardDigit, doubledDigit, doubledDigitAsString, secondSum);

    }else{
        cardPanSum += cardDigit;
        console.log(cardDigit);
    }
    isSecond = !isSecond;
}
console.log("Card PAN result:", cardPanSum % 10 === 0 ? "OK" : "ERROR");



