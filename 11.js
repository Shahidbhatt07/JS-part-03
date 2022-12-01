const URL = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest();
// console.log(xhr);
// console.log(xhr.readyState);  //readyState is 0
xhr.open("GET", URL);
// console.log(xhr.readyState);  //readyState is 1
// xhr.onreadystatechange = function () {
//     // console.log(xhr.readyState); //readyState is 2 3 4
//     if (this.readyState === 4) {
//         // console.log(xhr.response);
//         // console.log(typeof xhr.response); //string
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);
//         console.log(typeof data);
//     }
// }
//we can write this code a by using onload method. onreadystatechange will check at every step the readyState, but onload method will run only if readyState=4.
xhr.onload = function () {
    // console.log(xhr.readyState); //4
    const response = xhr.response;
    const data = JSON.parse(response)
    console.log(data);
}
xhr.send();






// XMLHttpRequest.readyState
// The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states:

// Value       	State	             Description
// 0	       UNSENT	             Client has been created. open() not called yet.
// 1	       OPENED	             open() has been called.
// 2	       HEADERS_RECEIVED	     send() has been called, and headers and status are available.
// 3	       LOADING	             Downloading; responseText holds partial data.
// 4	       DONE	                 The operation is complete.

// HTTP response status codes
// HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)
