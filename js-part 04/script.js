// loop: for loop, while loop, do while loop

//for loop 

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

// print all odd numbers (1 to 15 / 100)

// for (let i = 1; i <= 15; i = i + 2) {
//     console.log(i)
// }

// //backward
// for (let i = 15; i>= 1; i = i - 2) {
//     console.log(i)
// }

// print all even numbers 2 - 10

// for (let i = 2; i <= 10; i = i + 2) {
//     console.log(i)
// }
// //backwards
// for (let i = 10; i>= 2; i = i -2) {
//     console.log(i)
   
// }
// // print the multiplication table for 5

// for (let i = 5; i <= 50; i = i + 5) {
//     console.log(i)
// }

// let num = parseInt(prompt('write your number'));

// for (let i = num; i <= num * 10; i = i + num) {
//     console.log(i)
// }

//nested looping

// for (let i = 1; i <= 3; i++) {
//     console.log(`outer loop ${i}`)
//     for (let j = 1; j<=3; j++) {
//         console.log(j)
//     }
// }

//while loop 

// let i = 1;
// while(i <= 5) {
//     console.log(i)
//     i++
// }

// let favouriteMovie = 'bangla';
// let guess = prompt('enter your my favourite movie');

// while ((guess != favouriteMovie) && (guess != 'quite')) {
//     guess = prompt('wrong please try again')
// }

// if (guess === favouriteMovie) {
//     console.log('congrats')
// }else {
//     console.log('you are quite')
// }

//loops with arrays

// let fruits = ['mango', 'apple', 'banana', 'litchi', 'orange'];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
    
// }

// let heroes = [['ironman', 'spiderman', 'thor'], ['superman', 'wonder women', 'flash']]


// for (let i = 0; i < heroes.length; i++) {
//     console.log(heroes[i])
//     for (let j = 0; j < heroes[i].length; j++) {
//        console.log(`${i}, ${heroes[i][j]}`)
//     }
// }

// let students = [['imran', 4.89], ['eyaqub', 4.29], ['mansura', 5.00]]

// for (let i = 0; i < students.length; i++) {
//     // console.log(students[i])
//     for (let j = 0; j < students[i].length; j++) {
//         console.log(students[i][j])
//     }
// }

// //for of loops

// let products = [['watch', 'pen', 'paper'], ['football', 'laptop']]

// // for (let product of products) {
// //     console.log(product)
// // }

// //for of nested loops

// for (let product of products) {
//     console.log(product)
//     for (let item of product) {
//         console.log(item)
//     }
// }




//simple todoList

// let todos = []
// let req = prompt('enter your request list');

// while(true) {
//     if (req === 'quit') {
//         console.log('your are quit')
//         break;
//     }

//     if (req === 'list') {
//         for (let task of todos) {
//             prompt('enter your type add')
//             console.log(task)
//         } 
//     } else if (req === 'add') {
//         let task = prompt('enter you task add')
//         todos.push(task)
//     }
// }