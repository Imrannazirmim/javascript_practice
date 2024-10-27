
//async await learning for promise

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const num = Math.floor(Math.random() * 10) + 1;
//             resolve()
//             return num;
//         }, 1000)
//     })
// }

// async function demo() {
//   await getNum()
  
//   getNum()
// }

// console.log(demo())

const h1 = document.querySelector('h1')

function colorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve('color change')
        }, delay);
    })
}

async function getColor() {
    await colorChange("red", 1000);
    await colorChange("green", 1000);
    await colorChange("blue", 1000);
    await colorChange("orange", 1000);
    await colorChange("yellow", 1000);
    await colorChange("pink", 1000);
    await colorChange("tomato", 1000);
    await colorChange("grey", 1000);
    await colorChange("lightblue", 1000);
    await colorChange("pink", 1000);
    await colorChange("pink", 1000);
     colorChange("black", 1000);

}

getColor()