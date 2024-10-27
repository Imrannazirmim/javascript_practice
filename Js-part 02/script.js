// //template literal
// let pencilPrice = 10;
// let rabarPrice = 5;

// let output = `Total pencil price ${pencilPrice + rabarPrice} taka`;//backtik
// console.log(output);

// // Arithmetic Operator (+ - / * % ** )

// let a = 10
// let b = 8;

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b);
// console.log(a ** b);

// // unary Operator (++, --)

// console.log(a++);
// console.log(++a);
// console.log(--a);
// console.log(a--);

// //Assignment Operator (=, +=, -=, *=, /=, %= etc)
// //comparison Operaor (==, ===, !=, !==)

// let age = 18;
// let firstName = 'imran'
// console.log(age <= 18);

// //conditional statement

// if (age >= 18) {
//     console.log('you can vote')
// }
// if (firstName == 'imran') {
//     console.log(`welcome ${firstName}`)
// }

// // practice questions 1

// let color = 'green'

// if (color === 'red') {
//     console.log(`stop ${color}`)
// }
// if (color === 'yellow') {
//     console.log(`slow down ${color}`)
// }

// if (color === 'green') {
//     console.log(`let go ${color}`)
// }

// let marks = 66;

// if (marks >= 80) {
//     console.log('A+')
// } else if(marks >= 60) {
//     console.log('A')
// } else if( marks >= 33) {
//     console.log('B')
// } else{
//     console.log('F')
// }

// // practice questions

// let size = 'XL';

// if (size === 'XL') {
//     console.log(`Popcorn Price ${200} taka`)
// } else if (size === 'L') {
//     console.log(`Popcorn Price ${150} taka`)
// } else if (size === 'M') {
//     console.log(`Popcorn Price ${100} taka`)
// } else if (size === 'S'){
//     console.log(`Popcon Price ${50} taka`)
// } else {
//     console.log('not available Popcorn')
// }

// // nested if else statements

// let mark = 88

// if (mark >= 33) {
//     console.log(`you are pass ${mark}`)
//     if (mark >= 80) {
//         console.log(`your grade A+ ${mark}`)
//     } else if (mark >= 60){
//         console.log(`your grade A ${mark}`)
//     }

// } else {
//     console.log(`you are fall next time ${mark}`)
// }
// //logical operators expressions(&&, ||, !)


// let number = 89;

// if (number >= 33 && number >= 80) {
//     console.log('pass') // return false 
// }

// if (number >= 33 || number >= 80) {
//     console.log('A') // return true
// }

// if ((number > 33 && number <= 80) || !false) {
//     console.log('Pass for ')
// }

// practice questions for strings

// let goodString = 'apple';

// if ((goodString[0] === 'a') && (goodString.length >= 3)) {
//     console.log(`this is good string`)
// } else {
//     console.log(`not a good string`)
// }


// let num = 12;

// if ((num % 3 === 0) && ((num + 1 == 15) || (num - 1 == 11))) {
//     console.log('safe result')
// } else {
//     console.log('unsafe result')
// }


// // truthy & falsy
// let string = ' '
// if (string) {
//     console.log('it is true')
// }else{
//     console.log('it is false value')
// }

// switch statement

// let colorLight = 'red';

// switch (colorLight) {
//     case 'red':
//         console.log('Stop')
//         break
//     case 'yellow':
//         console.log('slow down');
//         break
//     case 'green':
//         console.log('let go')
//         break;
//         default :
//         console.log('light broken') 

// }

let days = parseInt(prompt('enter your 1 - 7 days press'))


switch (days) {
  case 1:
    console.log("saturday");
    break;
  case 2:
    console.log("sunday");
    break;
  case 3:
    console.log("monday");
    break;
  case 4:
    console.log("thesday");
    break;
  case 5:
    console.log("wednesday");
    break;
  case 6:
    console.log("teusday");
    break;
  case 7:
    console.log("friday");
    break;
  default:
    console.log('not a day')
}

