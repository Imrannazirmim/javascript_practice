//javascript callback

const h = document.querySelector('h1');


// function changeColor(color, delay, nextColorChange) {
//     setTimeout(()=>{
//         h.style.color = color;
//         if (nextColorChange) nextColorChange()
//     }, delay)
// }

// changeColor('red', 1000, ()=>{
//     changeColor('orange', 1000, () => {
//         changeColor('green', 1000, () => {
//             changeColor('blue', 1000, () => {
//                 changeColor('yellow', 1000, () => {
//                     changeColor('pink', 1000, () => {

//                     })
//                 })
//             })
//         })
//     })
// })

// function saveToDb(data) {
//     const netSpeed = Math.floor(Math.random() * 10) + 1;
//     if (netSpeed > 4) {
//         console.log('your data was save: ', data)
//     }else {
//         console.log('you data not save:')
//     }
// }

// saveToDb('promogomon college')  

//promise learning




// function dataSave(data) {
//     return new Promise((resolve, reject) => {
//         const internet = Math.floor(Math.random() * 10) + 1;
//         if (internet > 4) {
//             resolve('data is save')
//         }else {
//             reject('data not save')
//         }
//     })
// }

// const data = dataSave('hi')
// console.log(data)


function colorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            h.style.color = color;
            resolve()
        }, delay)
        
    })
}

colorChange("red", 1000)
  .then(() => {
    console.log("red color change");
    return colorChange("green", 1000);
  })
  .then(() => {
    console.log("green color change");
    return colorChange("blue", 1000);
  })
    .then(() => {
        console.log('blue color change');
        return colorChange('yellow', 1000)
    })
    .then(() => {
        console.log('yellow color change');
        return colorChange('pink', 1000)
    })