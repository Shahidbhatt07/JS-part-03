//?  understand callback
//?  These all are basic examples of Callback used in synchronous programming

// function myFunc(callback) {
//     console.log("Function is dong task 1");
//     callback();
// }

// Way 1
// function myFunc2() {
//     console.log("Function is dong task 2");
// }
// myFunc(myFunc2());

// Way 2
// myFunc(() => {
//     console.log("Function is dong task 2");  //Function is dong task 1  Function is dong task 2
// })




//Eg. 2
// function getTwoNumbersAndAdd(number1, number2, callback) {
//     if (typeof number1 === "number" && typeof number2 === "number") {
//         callback(number1, number2)
//     }
//     else {
//         console.log("Wrong data Type");
//     }
// }
// // way 1
// // function AddTwoNumbers(num1, num2) {
// // console.log(num1+num2);
// // }
// // getTwoNumbersAndAdd(3, 5, AddTwoNumbers);

// //way 2
// getTwoNumbersAndAdd(3, 5, (num1, num2) => {
//     console.log(num1+num2);
// });


//! on passing 2 callbacks --onSuccess, onFailure
function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
    if (typeof number1 === "number" && typeof number2 === "number") {
        onSuccess(number1, number2)       
    }
    else {
        onFailure();
    }
}
// getTwoNumbersAndAdd("3", 5, (num1, num2) => {
//     console.log(num1+num2); 
// }, () => {
//     console.log("Wrong data Type");
//     console.log("Please enter numbers only");
// });

//hum kuch aisa b kar sakte hai
function AddTwoNumbers(num1, num2) {
    console.log(num1+num2); 
}
function onFail() {
    console.log("Wrong data Type");
    console.log("Please enter numbers only");
}
getTwoNumbersAndAdd(3, 5, AddTwoNumbers, onFail);