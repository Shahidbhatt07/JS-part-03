// fetch
// const URL = "https://jsonplaceholder.typicode.com/posts";
// fetch(URL)
// // console.log(fetch());  //this will return promise
//     .then((response) => {
//         // console.log(response); //this will return promise
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })


   //----------------------------------//
   //now we will see how to POST data and we will also handle errors in it
   
const URL = "https://jsonplaceholder.typicode.com/postssss";
fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error("something went wrong")
        }
    })
    .then((data) => {
    console.log(data);
    })
    .catch((error) => {
    console.log(error);
})
