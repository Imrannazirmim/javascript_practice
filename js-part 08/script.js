//array method 
//forEach 
// const arr = [2, 4, 7, 7, 9, 3];
// const students = [
//   {
//     name: "imran",
//     age: 22,
//   },
//   {
//     name: "nazir",
//     age: 25,
//   },
//   {
//     name: "mim",
//     age: 122,
//   },
// ];

// arr.forEach((a) => {
//     console.log(a)
// })

// students.forEach((student) => {
//     console.log(student.name)
//     console.log(student.age);
// })

// //Map 

// const numbers = [3, 2, 4, 6, 5, 8, 7, 9]

// const double = numbers.map((el) => {
//     return el * 2
// })

// console.log(double)

// const marks = students.map((el) => {
//     return el.age / 10
// })

// console.log(marks);

// //filter

// const filterNum = numbers.filter((num) => {
//     // return num % 2 == 0;
//     return num < 5
// })

// console.log(filterNum)


// //every 
// const everyNumber = [2,4, 6, 8, 10]

// const result = everyNumber.every((num) => {
//     return num % 2 == 0;
// })

// console.log(result) // return true or false check the value

// //some
// const someResult = everyNumber.some((el) => {
//   console.log(el)
// })

// console.log(someResult)

//reduce of array
const nums = [1, 2, 3, 4, 5, 6, 7, 8]

const resultReduce = nums.reduce((res, el) => {
  return res + el
  
})

console.log(resultReduce)

const arrj = [1, 2, 3, 5, 4, 6, 8, 38, 83, 7, 29, 38, 48];

// let mex = -1;

// for (let i = 0; i < arrj.length; i++) {
//   if (mex < arrj[i]) {
//     mex = arrj[i]
//   }
// }

// console.log(mex)

const ans = arrj.reduce((max, el) => {
  if (max < el) {
    return el
  } else{
    return max
  }

})

console.log(ans)//ans 83

//practice qs check all numbers in our array are multiple of 10 or not

const numbers = [20, 30, 40, 50, 60];

const result1 = numbers.every((el) => {
  
  return el % 10 == 0;
})

console.log(result1)



function getMin(nums1) {
  
const min = nums1.reduce((min, el) => {
  if (min < el) {
    return min;
  } else {
    return el;
  }
});
return min
}
const nums1 = [12, 34, 5, 44, 3, 83, 88];

console.log(getMin(nums1))

// defualt parameters

function sum(a, b = 2) {
  return a + b
}

console.log(sum(2))

//spread literals operators

const arr = [2, 4, 4, 4, 2, 3, 5, 38, 3];
const char = [...'imran nazir mim']

const newArr = [...arr]
console.log(newArr)
console.log(char)


//spread objects

const data = {
  email: 'iron@gmail.com',
  password: 'sadkghsk'
}
const stringName = [...'imrannazirmim']
const dataNumber = [2, 4, 8, 3, 3, 8]

const dataCopy = {...data, id: 1234, country: 'bangladesh', ...dataNumber, stringName}
console.log(dataCopy)

// rest arguments

function sum(...args) {
  return args.reduce((res, el) => res + el)
}

console.log(sum(5, 5, 4, 4, 4, 23, 4, 5, 289, 4, 3,54, 34893, 48))

function min(...args) {
  return args.reduce((min, el) => {
    if (min > el) {
      return el
    }else {
      return min
    }
  })
}

console.log(min(2, 4, 5, 8, 3, 2, 5))

// array or objects Destructuring

const names = ['imran', 'nazir', 'mim', 'eyaqub', 'mansura'];

const [winner, runnerUp, ...topper] = names;

console.log(winner, runnerUp, topper)

//objects destruring

const studentDetails = {
  name: 'imran', 
  age: 22,
  class: 12,
  college: 'adina govt college',
  email: 'adina@gmail.com',
  password: 'fskjf32',
  city: 'rajshahi'
}

const {email, password, class: school, country = 'bangladesh', ...other} = studentDetails;
console.log(studentDetails)
console.log(email, password);
console.log(other);
console.log(country);
console.log(school);


