//async await   
const URL = "https://jsonplaceholder.typicode.com/posts";
// async function getPosts() {
//     const response = await fetch(URL);
//     if (!response.ok) {
//         throw new Error("something went wrong")
//     }
//     const data = await response.json();
//     return data;
// }

   //using arrow function
   const getPosts =async () => {
    const response = await fetch(URL);
if (!response.ok) {
    throw new Error("something went wrong")
}
const data = await response.json();
return data;
}


getPosts().then((myData) => {
    console.log(myData);
})
    .catch((error) => {
        console.log("inside catch block");
    console.log(error);
    })

 
   