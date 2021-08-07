// 1. conversation
function feetToInch(feet){
    const inch = feet * 12;
    return inch;
}
const myInches = feetToInch(6);
console.log('My height is', myInches, 'inch');
// 2. conversion 
function centimeterToMeter(centimeter){
    const meter = centimeter / 100;
    return meter;
}
const newMeter = centimeterToMeter(123);
console.log(newMeter, 'meter');
// 3. Calculation -- book 1 has 100 pages, book 2 has 200 pages, book 3 has 300 pages. =count total printed pages
function pageRequirements(book1, book2, book3){
    return (book1 * 100) + (book2 * 200) + (book3 * 300);
}
const totalPages = pageRequirements(2, 4, 1);
console.log('Total pages needed', totalPages);

// 4. friends - find the longest name
const names = ['Mizan', 'Rahad', 'Bashar', 'Johurul', 'Sabbir'];
function bestFriends(arrayNames){
    let longName = arrayNames[0];
    for(const name of arrayNames){
        if(longName.length < name.length){
            longName = name;
        }
    }
    return longName;
}
const longestName = bestFriends(names);
console.log('Longest name is', longestName);

// 5. will stop the loop if the array has any negative number and print all positive number before that number
let numbers = [3, 5, 8, 9, 19, 12, 33, -16, 56, 99];
function onlyPositive(numbersArray){
    let newNumbers = [];
    for(const number of numbersArray){
        if(number < 0){
            break;
        }
        else if(newNumbers.indexOf(number) == -1){
            newNumbers.push(number);
        }
    }
    return newNumbers;
}
const positiveNumbers = onlyPositive(numbers);
console.log(positiveNumbers);