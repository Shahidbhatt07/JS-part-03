// Callback in asynchronous programming
// callback hell
// pyramid of doom

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// setTimeout(() => {
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "violet";
// }, 1000);
// setTimeout(() => {
//     heading2.textContent = "Heading 2";
//     heading2.style.color = "violet";
// }, 2000);
//Note: this code is not considered as best practice because we always have to takecare of time what we are giving to it.
//       So the practice which we will learn is by introduction callback inside functions, but that also leads us to callback hell


//This task is a good example of callback hell i.e, callback inside callback and another callback and so on...........
//Task
// Text        Delay           color
//one            1s               violet
//two            2s              purple
//three          2s                red
//four           1s                pink
//five           2s                green
//six            3s                 blue
//seven          1s                brown


// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");

// setTimeout(() => {
//     heading1.textContent = "One";
//     heading1.style.color = "violet";
//     setTimeout(() => {
//         heading2.textContent = "Two";
//         heading2.style.color = "purple";      //!C
//         setTimeout(() => {                      //!A
//             heading3.textContent = "Three";        //!L
//             heading3.style.color = "red";             //!L
//             setTimeout(() => {                           //!B
//                 heading4.textContent = "Four";              //!A
//                 heading4.style.color = "pink";                 //!C
//                 setTimeout(() => {                                 //!K
//                     heading5.textContent = "Five";           //!H
//                     heading5.style.color = "green";            //!E
//                     setTimeout(() => {                           //!L
//                         heading6.textContent = "Six";               //!L
//                         heading6.style.color = "blue";
//                         setTimeout(() => {
//                             heading7.textContent = "Seven";
//                             heading7.style.color = "brown";
//                         }, 1000)
//                     }, 3000)
//                 }, 2000)
//             }, 1000)
//         }, 2000)
//     }, 2000)
// }, 1000);

//This code is very touch to maintain and read so to overcome this, so we will introduce a new concept called "Promises". Lets learn it in new file


//!<---------------------------------------->

//pyramid of doom

//Task
// Text        Delay           color
//one            1s               violet
//two            2s              purple
//three          2s                red
//four           1s                pink
//five           2s                green
//six            3s                 blue
//seven          1s                brown

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color;
            if (onSuccessCallback) {
                onSuccessCallback();
            }
        }
        else {
            if (onFailureCallback) {
                onFailureCallback();
            }
       }
    }, time)
};

changeText(heading1, "one", "violet", 1000, () => {
    changeText(heading2, "two", "purple", 2000, () => {
        changeText(heading3, "Three", "red", 2000, () => {
            changeText(heading4, "Four", "pink", 1000, () => {
                changeText(heading5, "Five", "green", 2000, () => {
                    changeText(heading6, "Six", "blue", 3000, () => {
                        changeText(heading7, "Seven", "brown", 1000, () => {

                        }, ()=>{console.log("Heading7 doest exist");})
                    }, ()=>{console.log("Heading6 doest exist");})
                }, ()=>{console.log("Heading5 doest exist");})
            }, ()=>{console.log("Heading4 doest exist");})
        }, ()=>{console.log("Heading3 doest exist");})
    }, ()=>{console.log("Heading2 doest exist");})
}, ()=>{console.log("Heading1 doest exist");})

            //!(This is pyramid of doom)