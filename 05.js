//Promises
//it represents the future value
//Earlier it was called as 'Future value'
//initially the status of promises are pending
//Either a promise is fulfilled i.e "resolve" or it is being rejected i.e "reject"
//we will learn how to use .then, .catch methods

//How to produce Promises
// const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
// //1.  Make fried Rice
// const friedRicePromise = new Promise((resolve, reject) => {
//     if (bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")) {
//         resolve("fried rice which is ready");
//     } else {
//         reject("Couldn't do it")
//     }
// });
// console.log( friedRicePromise);


//consume
//2. How to consume Promises
//we consume pronises using then, catch, async, await etc etc

// friedRicePromise.then((myfriedRice) => {
//     //ye tab chale ga jab promise resolve hoga
//     console.log("lets eat", myfriedRice);
// }, (error) => {
//     //ye tab chale ga jab promise reject hoga
//     console.log(error);
// })
//hum yahn then method mai 2 cheezu ka care kar rhe hai, resolve aur reject ka b
// hume ye sab karne ki zarurat nai hai
//hum yahn aaik orr method use kar sakte hai jiska naam catch-method hai, jsime hum error ko handle kar sakte hai

// friedRicePromise.then((myfriedRice) => {
//     //ye tab chale ga jab promise resolve hoga
//     console.log("lets eat", myfriedRice);
// }).catch((error) => {
//         console.log(error);
// })
    

//Promises are added in 'Microtask Queue'
//if promises as well as callbacks are waiting in their respectives queues, first task which will be be resolved will be Promises and then callbacks
//Promises have higher precedence than callbacks
console.log("welcome!!!");
console.log("script started!!!");
const bucket2 = ["coffee", "chips", "vegetables", "salt", "rice"];
const friedRicePromise2 = new Promise((resolve, reject) => {
    if (bucket2.includes("vegetables")&& bucket2.includes("salt")&& bucket2.includes("rice")) {
        resolve("fried rice which is ready");
    } else {
        reject("Couldn't do it")
    }
});
setTimeout(() => {
    console.log("hello from setTimeout");
}, 0)

for (let i = 0; i < 10; i++){
    console.log(Math.random(), i)
    };

friedRicePromise2.then((myfriedRice) => {
    //ye tab chale ga jab promise resolve hoga
    console.log("lets eat", myfriedRice);
}).catch((error) => {
        console.log(error);
})