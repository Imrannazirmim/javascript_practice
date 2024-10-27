
const para = document.querySelector('p');
console.log(para.nextElementSibling)
console.log(para.previousElementSibling)
console.log(para.parentElement)
console.log(para.children)
console.log(para.nextElementSibling.children)
console.log(para.nextElementSibling)
console.log(para.nextElementSibling.nextElementSibling);

const para2 = document.createElement('p');
const btn = document.createElement('button');
btn.innerText = 'New Button'
para2.innerText = 'Beutiful Website';
para2.style.color = 'green';
para2.style.fontSize = '1.6rem';
para2.style.backgroundColor = 'pink'
para.prepend(para2)
para.insertAdjacentElement('beforeend', btn)
console.log(para2)

const para1 = document.createElement('p');
para1.innerText = 'Hey, I`m imran';
para1.style.color = 'red';
document.body.appendChild(para1)