//Function returning promise
function friedRicePromise() {
    const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
    return new Promise((resolve, reject) => {
        if (bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")) {
            resolve("fried rice which is ready");
        } else {
            reject("Couldn't do it")
        }
    });
}
friedRicePromise().then((myfriedRice) => {
    //ye tab chale ga jab promise resolve hoga
    console.log("lets eat", myfriedRice);
}).catch((error) => {
        console.log(error);
})
