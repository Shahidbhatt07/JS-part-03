const URL =  "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", URL);
xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.response);
        console.log(data);
        //now i want a particular data at id =4, so first i have to get the data from url and i can link that data with and after that i can get the desired data
    const xhr2 = new XMLHttpRequest();
    const id = data[3].id; //4
        console.log(id);
        const URL2 = `${URL}/${id}`;
        console.log(URL2);
        xhr2.open("GET", URL2);
        xhr2.onload = () => {
            const data2 = JSON.parse(xhr2.response);
            console.log(data2);
        }
       
        xhr2.send();

    }

    else {
        console.log("something went wrong");
    }

}
//how to handle network error
xhr.onerror = () => {
    console.log("network error");
} 

xhr.send();

