// const btn = document.querySelector("#btn");
// const colorBody = document.querySelector(".color");
// const result = document.querySelector(".result");
// const input = document.getElementById('input')


// btn.addEventListener('click', (e) => {
//    const bgColor =  randomColor()
//    colorBody.style.backgroundColor = bgColor
//    btn.style.backgroundColor = bgColor;
//    result.innerText = bgColor
// });

// function randomColor() {
//     const red = Math.floor(Math.random() * 255)
//     const green = Math.floor(Math.random() * 255)
//     const blue = Math.floor(Math.random() * 255);
    
//     return `rgb(${red},${green},${blue})`
// }


// input.addEventListener('keydown', (e) => {
//     console.log(e.key)
//     console.log(e.code);
//     console.log(e.detail);
// })


// const form = document.querySelector('form');
// const input = document.querySelector('#input')

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const inputValue = input.value;
//     input.value = ''
//     console.log(inputValue)
// })


// input.addEventListener('input', () => {
//     console.log('input change')
//     console.log(input.value);
// })

const input = document.querySelector('#input')
const result = document.querySelector('#result');



input.addEventListener('input', (e) => {
    e.preventDefault()
    // input.value = "";
   result.innerText = input.value
   
})