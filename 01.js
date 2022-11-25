//Aysynchronous JavaScript
//Javascript is a single threaded Programming Language
//javascript executes code line by line but the asynchronous nature is different from this

//There are lot of functions that will help us to learn aysynchronous behavior of Javascipt

//1. setTimeout()
// console.log("hello Hoorain Jaan I started coding");
// console.log("hammad Jaan");
// const id = setTimeout(() => {
//     console.log("setTimeout is set");
// }, 1000);
// console.log(id);
// console.log("hello Hoorain Jaan coding ended");

// output
//1. hello Hoorain Jaan I started coding
//2. hammad Jaan
//3. 1
//4. hello Hoorain Jaan coding ended
//5. setTimeout is set

//? setTimeout gives always us an id which is a number


//2.clearTimeout()
// console.log("hello Hoorain Jaan I started coding");
// console.log("hammad Jaan");
// const id = setTimeout(() => {
//     console.log("setTimeout is set");
// }, 1000);
// console.log(id);


//output
//1. hello Hoorain Jaan I started coding
//2. hammad Jaan
//3. 1

//3. setInterval()
// console.log("script start!!!");
// for (let i = 1; i < 1000; i++){
//     console.log("loop is running");
// }
// const id = setInterval(() => {
//     console.log("inside setInterval");  //iska mtlb hai ki aap ye line every 1 sec ke baad print karte rehna
// }, 1000);
// console.log("script end");

// Eg 2
// console.log("script start");
// setInterval(() => {
//     console.log(Math.random());
// }, 1000);
// console.log("script end");