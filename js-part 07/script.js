
//this keyword

const student = {
    name: 'imran',
    age: 23,
    eng: 95,
    math: 100,
    phy: 97,
    getAvg() {
        console.log(this)
        const avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} avarage number = ${avg}`)
    }
}
const result = student.getAvg()
console.log(result)

//miscellaneous topics
//arrow functions 

const multiple = (a, b) => {
    return a**b
}
console.log(multiple(2,4));

//set Timeout

console.log('this is imran');

setTimeout(() => {
    console.log('adina college') //time count last time print
}, 1000);

console.log('hellow')

//set interval functions

const id = setInterval(() => {
    console.log('my name is imran khan')
}, 2000)

clearInterval(id)



//arrow functions

const students = {
    name: 'nazir',
    age: 22,
    marks: 3.43,
    getName() {

        const nameResult = this.name // global scope parnet scope students
        console.log(nameResult)
       
    },
    getMarks: () => {
       const marksResult = this.marks //window scope or parents scope
       console.log(marksResult)
    }
}

students.getName()
students.getMarks();


//practice questions

const numbers = (n) => {
    return n**n
}

console.log(numbers(5))


const id2 = setInterval(() => {
    console.log('wow no setinterval, imran nazir mim')
}, 2000)

setTimeout(()=> {
    clearInterval(id2)
}, 10000)