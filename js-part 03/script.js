// //javascript replace for search

let msg = 'llovecoding'

let result = msg.replace('i', 'love')
console.log(result)

//repeat

console.log(msg.repeat())//string double

//practice qs:

let str = 'hello!'

console.log(str.trim().toUpperCase())

let name = 'progomoncollege';

console.log(name.slice(4, 9))

console.log(name.indexOf('mon'))

console.log(name.replace('college', ' school'))

console.log(name.slice(8).replace('c', 'D'))


// Array (data structure)

const students = ['imran', 'khan', 'nazir', 'mim', 'eyaqub'];
const number = [2, 4, 89, 34, 43,24]
//array storage of object
const emptyArray = []

console.log(typeof students)

students.forEach((student, index)=> {
    console.log(student, index)
}) 

console.log(emptyArray.push(students))
console.log(emptyArray)
console.log(students[2][2])

// Array is Mutable of changing for string

const fruits = ['apple', 'orange', 'bannana', 'papiya'];

fruits[0] = 'sosha';
fruits[8] = 'grapes' // length count of array result print

console.log(fruits)

// array method: [push, unshift, pop, 'shift]

const cars = ['audi', 'bmw', 'tesla', 'maruti', 'toyoto'];

cars.push('ferrari')
console.log(cars)
cars.pop()
console.log(cars)
cars.unshift('royals');
console.log(cars)
cars.shift()
console.log(cars)


// push:- add to value end
// pop:- delete from end value & returns it
// unshift: add to start
// shift: delete from start & return it 

// practice qs

const months = ['january', 'july', 'march', 'august'];
months.shift()
console.log(months) //january remove

months.push('february')
console.log(months)// february add last index

months.unshift('june') // june add first index
console.log(months)

months.pop()
console.log(months) //february last index remove

// Array methods: indexOf, includes

const primary = ['red', 'yellow', 'blue', 'green'];
const secondary = ['orange, violet', 'pink']
primary.indexOf('yellow');

console.log(primary.indexOf('yellow'))// indexOf value match 1 return
// value not match -1;

const color1 = primary.concat(secondary)
const color2 = primary.concat(secondary).reverse()
console.log(color1)
console.log(color2);

const color = ['red', 'yellow', 'blue', 'orange', 'pink', 'white'];

const colorResult = color.slice(0, 4);
const colorResult1 = color.slice(-2)//last element remove
console.log(colorResult)
console.log(colorResult1);

//splice array method 

const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'white'];
// const colorsResult = colors.splice(2);
// console.log(colorsResult)

colors.splice(0, 0)
colors.splice('ferrari', 'kdjkf')
console.log(colors)

//Array sort method

const chars = ['s', 'b', 'c', 'a', 'd', 'k', 'w', 'e']
chars.sort()
console.log(chars)//sort string letter first a - z increase

const numbers = [33, 42, 89, 100, 48];
numbers.sort()
console.log(numbers) //sort not using numbers value for random charectar

//practice splice add july, june

const mon = ['january', 'july', 'march', 'august'];
mon.splice(0, 2, 'july', 'june')
console.log(mon)

//reverse
const languages = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql']

languages.reverse()
console.log(languages.indexOf("javascript")); //javascript index 4

//javascript references

const arr = ['a', 'b', 'c'];

const arrCopy = arr
console.log(arrCopy)
arr.push('d')
console.log(arrCopy)
console.log(arr)

//array constant 

//nested arrays:- arrays of arrays

const nums = [[2, 4], [3, 5], [4, 8], [2, 5]];

console.log(nums[0][1])
console.log(nums[1][1]);
console.log(nums.length);


const game = [['x', null, 'o'], ['o', null, 'x'], [null, 'o', 'x']]
game[0][1] = 'o'
console.log(game) //2d array or nested array