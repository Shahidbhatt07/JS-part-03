//Previous example in which 04.js, we solve that using callback
//now solve the same example using Promises

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.textContent = text;
                element.style.color = color;
                resolve();
            }
            else {
                reject("element not found");
           }
        }, time) 
    })   
};



// const returnedPromise = changeText(heading1, "one", "red", 2000);
// returnedPromise.then(() => {
//    return changeText(heading2, "two", "blue", 1000);
// })
//     .then(() => {
//         return changeText(heading3, "three", "green", 1000);
//     })
//     .then(() => {
//         return changeText(heading3, "three", "green", 1000);
// })
// .then(() => {
//     return changeText(heading4, "four", "brown", 1000);
// })
// .then(() => {
//     return changeText(heading5, "five", "violet", 1000);
// })
// .then(() => {
//     return changeText(heading6, "six", "yellow", 1000);
// })
// .then(() => {
//     return changeText(heading7, "seven", "pink", 1000);
// })

// we can modify code write this code as
// changeText(heading1, "one", "red", 2000)
// .then(() => {
//    return changeText(heading2, "two", "blue", 1000);
// })
//     .then(() => {
//         return changeText(heading3, "three", "green", 1000);
//     })
//     .then(() => {
//         return changeText(heading3, "three", "green", 1000);
// })
// .then(() => {
//     return changeText(heading4, "four", "brown", 1000);
// })
// .then(() => {
//     return changeText(heading5, "five", "violet", 1000);
// })
// .then(() => {
//     return changeText(heading6, "six", "yellow", 1000);
// })
// .then(() => {
//     return changeText(heading7, "seven", "pink", 1000);
// })

// we can further modify code as we know in arrow functions if we are returning something in a single line, we can sking the keyword 'return' and curly brace} 
changeText(heading1, "one", "red", 2000)
.then(() =>changeText(heading2, "two", "blue", 1000))
.then(() => changeText(heading3, "three", "green", 1000))
.then(() => changeText(heading4, "four", "brown", 1000))
.then(() => changeText(heading5, "five", "violet", 1000))
.then(() => changeText(heading6, "six", "yellow", 1000))
.then(() => changeText(heading7, "seven", "pink", 1000))
.catch((error) => alert(error))