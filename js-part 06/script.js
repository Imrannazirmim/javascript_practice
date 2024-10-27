// functions learning

//practice qs

function randomNumber() {
  const random = Math.floor(Math.random() * 6) + 1;
  console.log(random);
}

randomNumber();

//argument pass fo functions

function printInfo(name, age, email) {
  console.log(name, age, email);
}

printInfo("imran", 22, "@gmail.com");

//calculate average

function calculate(a, b, c) {
  const cal = (a + b + c) / 3;
  console.log(cal);
}

calculate(2, 2, 2);

//print of table of numbers

// function table(n) {
//     for (let i = n; i <= n*10; i +=n) {
//         console.log(i)
//     }
// }

// table(5)

// 1 to n sum of numbers

function numbersSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(numbersSum(10));

//practice qs

const arr = ["imran", "khan", "tomato", "apple", "orange"];

function addStrings(arr) {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

console.log(addStrings(arr));

//scope learning

// const sum = 4;

// function calSum(a, b) {
//     const sum = 5; //block scope

// }
// console.log(calSum(sum))

//lexical scope

function outerFunc() {
  let x = 5;
  let y = 8;
  function innerFunc() {
    console.log(x);
    console.log(y);
  }
  innerFunc();
}

outerFunc()

//practice scope lexical

let greet = 'hellow'
function changeGreet() {
    let greet = 'how are you'
    console.log(greet)
    function innerGreet() {
        console.log(greet) // lexical scope
    }
    innerGreet()
}

console.log(greet)
changeGreet()


//function expressions

const name = function(a, b) {

    return a + b;
}

console.log(name(2, 2))

// higher order functions

function multiple(func, count) {
    for(let i = 1; i <= count; i++) {
        func()
    }
    
}
const greet1 = function () {
  console.log("hellow");
};

console.log(multiple(greet1, 10))

// higher order functions

function oddFactoryFunc(request) {
    if (request == 'odd') {
        return function(n) {
            console.log(!(n % 2 == 0))
        }
       
    } else if(request == 'even') {
       return function(n) {
            console.log(n % 2 == 0)
        }
        
    }else {
        console.log('your number wrong')
    }
}
let request = 'odd'
console.log(request)

const funct = oddFactoryFunc(request)
console.log(funct(4))


//create functions

const calculator = {
    
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    multi(a, b) {
        return a * b;
    }
}

console.log(calculator.add(2, 3))
console.log(calculator.sub(2, 3))
console.log(calculator.multi(2, 3));