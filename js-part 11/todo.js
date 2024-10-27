const input = document.querySelector("#input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");


btn.addEventListener('change', (e) => {
    e.preventDefault();
    const inputValue = input.value
    const li = document.createElement('li')
    li.innerText = inputValue
    ul.append(li)
    input.value = '';
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.style.marginLeft = '8px'
    li.append(deleteButton);
    deleteButton.addEventListener('click', function() {
        li.remove()
    })
})