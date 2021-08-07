// 1. write 3 variables (number, string, boolean)
let number = 12;
let str = 'I love javascript';
const isTrue = true;

// 2. 2 variables using(Iet, const).
let changable = 13;
changable = 14;
console.log(changable);
const notChangable = 10;

// 3. Simple math operations  + , -, *, / , %
const firstNumber = 15;
const secondNumber = 10;
const add = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const mul = firstNumber * secondNumber;
const div = firstNumber / secondNumber;

// 4. comparison (all)
console.log(firstNumber == secondNumber);
console.log(firstNumber != secondNumber);
console.log(firstNumber > secondNumber);
console.log(firstNumber < secondNumber);
console.log(firstNumber >= secondNumber);
console.log(firstNumber <= secondNumber);

// 5. two fullfill of conditions, fullfil atleast one condition
console.log(firstNumber != secondNumber && firstNumber > secondNumber);
console.log(firstNumber == secondNumber  || firstNumber < secondNumber);

// 6. if-else
if(firstNumber > secondNumber){
    console.log('Yes it is boro');
}
else{
    console.log('need more knowledge about conditions');
}
// 7. while loop 7-19 odd numbers including 7 and 19
let i = 7;
while(i <= 19){
    if(i % 2 == 1){
        console.log(i);
    }
    i++;
}

// 8. Declare an array , number of elements. 4th position replace , add or remove an element, check element if exists
let numbers = [3, 5, 8, 9, 19, 12, 33, 56, 99];
console.log('Number of elements', numbers.length);
numbers[3] = 101;
console.log(numbers);
numbers.push('Mango');
numbers.pop()

// 9. use any for loop to display every element of an array
for(const number of numbers){
    console.log(number);
}
// 10. You have an array of numbers, display only the number bigger than 80
console.log('Bigger numbers than 80');
for(const number of numbers){
    if(number > 80){
        console.log(number);
    }
}
// 11. write a function that takes three numbers and returns the multiplications of three numbers
function multiplications(number1, number2, number3){
    const total = number1 * number2 * number3;
    return total;
}
const myNumberMulty = multiplications(3, 5, 8);
console.log('Total is', myNumberMulty);

// 12. Declare an object and change any property of that object
let myFriends = [
    'karim', 'rahim', 'modon', 'harun', 'mamun', 'zakir'
]
myFriends[2] = {
    name: 'Rojoni',
    figure: 'hot'
};
myFriends[2].figure = 'Cool';
console.log(myFriends);