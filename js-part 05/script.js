//objects post

// const posts = {
//     username: '@imran22',
//     content: 'this is my #first post',
//     likes: 3334,
//     repost: 88,
//     tags: ['@khan', '@suransjk', '@delta', '@college']
// }


// console.log(posts.username);
// console.log(posts.content);
// console.log(posts.likes);
// console.log(posts.repost);
// console.log(posts.tags[3]);

// //object value add update

// const student = {
//     name: 'imran',
//     college: 'adina govt college',
//     gpa: 4.92,
//     city: 'chapai nawabgonj'
// }

// console.log(student)
// student.city = 'shibgonj'
// console.log(student)
// student.gpa = 33.4
// console.log(student)
// student.gpa = [33, 44, 55]
// console.log(student.gpa[0])

// // objects of objects

// const classInfo = {
//   imran: {
//     grade: "A+",
//     city: "chapai",
//   },
//   nazir: {
//     grade: "A",
//     city: "shibgonj",
//   },
//   eyaqub: {
//     grade: "A-",
//     city: "natore",
//   },
// };

// console.log(classInfo.imran.grade);
// console.log(classInfo.nazir.city);
// console.log(classInfo.eyaqub.grade);

//arrays of objects

// const classInfor = [
//     {
//         name: 'imran',
//         grade: 'A+',
//         city: 'shibgonj'
//     },
//     {
//         name: 'nazir',
//         grade: 'A-',
//         city: 'chapainawabgonj'
//     },
//     {
//         name: 'mim',
//         grade: 'o',
//         city: 'rajshahi'
//     }
// ];

// console.log(classInfor)
// console.log(classInfor[0]);
// console.log(classInfor[1]);
// console.log(classInfor[2]);

// console.log(classInfor[0].name)
// classInfor[0].grade = 'F'
// console.log(classInfor[0].grade)

// // Math objects: (PI, E, random, sin, abs, pow, floor, ceil)

// const random = Math.floor(Math.random() * 10)+1
// console.log(random)

// //practice qs 1 - 100

// const randomMath = Math.floor(Math.random() * 100) + 1;
// console.log(randomMath)


//guessing game 1 to 10

const max = prompt('enter your max number');

const randomNum = Math.floor(Math.random() * max) + 1;
let guess = prompt('enter the guess number')

while(true) {
    if (guess == 'quite') {
        console.log('your are quite')
        break;
    }
    if (guess == randomNum) {
        console.log('your are write contrat!', randomNum)
        break;
    } else if(guess < randomNum) {
        guess = prompt('your small number. please try again.',)
    } else {
        guess = prompt('your number large, please try again',)
    }
}