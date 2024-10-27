//how to api learning fetch data and axios data 
// API:- application programming interface

// const url = "https://jsonplaceholder.typicode.com/posts/";

// fetch(url, {
//     method: "POST",
//     body: JSON.stringify({
//         body: 'this is imran nazir mim',
//         title: 'hi, my name is imran',
//         userId: 1,
//         name: 'imran'
//     }),
//     headers: {
//         "content-type": 'application/json'
//     }
// })
// .then(respone => respone.json())
// .then(data => console.log(data))

//fetch data

// async function getData() {
//     try {
//         const respone = await fetch(url);
//         const data = await respone.json();
//         console.log(data[0].body)
//     }catch(error) {
//         console.log('data not fectch', error)
//     }
//     console.log('hi, error')
// }
// getData()


// axios fetch data

// const result = document.querySelector(".result");


// button.addEventListener("click", async () => {
//   const data = await getDataFetch();
//   data.forEach((el) => {
//    const random = Math.floor(Math.random() * 100)
//    console.log(random)
//   })
// //   const {...res} = {data}
// //   const {...body} = res
// //   console.log(body)
// });

// async function getDataFetch() {
//     try {
//         const respone = await axios.get(url);
//         const data = respone.data 
//         return data
//     } catch (error) {
//         console.log('data not fetch', error)
//     }
// }

// const url = 'https://icanhazdadjoke.com/'


// async function getJokes() {
//     try {
//         const config = {headers: {accept: 'application/json'}}
//         const res = await axios.get(url, config);
//         console.log(res.data)
//     }catch(error) {
//         console.log('data not fetch', error)
//     }
// }

// getJokes()

const button = document.querySelector("#btn");

const list = document.querySelector(".list");

const url = 'http://universities.hipolabs.com/search?name='

button.addEventListener("click", async () => {
   const country = document.querySelector("#input").value
    const countryArray = await getCountry(country);
    show(countryArray)
    document.querySelector("#input").value = ''
});

function show(countryArray) {
    list.innerHTML = "";
    for(col of countryArray) {
        const li = document.createElement('li');
        li.innerText = col.name;
        list.appendChild(li)
        
    }
}

async function getCountry(country) {
    try{
       const respone = await axios.get(url + country)
       return respone.data

    }catch(e) {
        console.log('data not fetch', e)
    }    
    
}

