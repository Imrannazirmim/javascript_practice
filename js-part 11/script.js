
const div = document.querySelector('div');
const ul = document.querySelector("ul");
const li = document.querySelector("li");

div.addEventListener('click', function(){
    console.log('div is click')
})


ul.addEventListener("click", function (e) {
    e.stopPropagation()
  console.log("ul is click");
});


li.addEventListener("click", function (e) {
    e.stopPropagation()
  console.log("li is click");
});
