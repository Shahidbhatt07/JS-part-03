// Promise.resolve
//promise chaining

// Promise.resolve
// const myPromise = Promise.resolve(5);
// myPromise.then((value) => { console.log(value) })  //5   This line can also be written as  myPromise.then(value =>  console.log(value) )

// note: .then() methods always returns Promise
// with the help of this we can create Chain of Promises

//promise chaining
function myPromise() {
    return new Promise((resolve, reject) => {
        resolve("foo");
  })  
}
myPromise().then((value) => {
    console.log(value); //foo
    value += "bar";
    return value;   //ye jo reurn value hai asal mai ye aaik promise hai. proof: it will work as : return Promise.reslove(value);
                  // return Promise.resolve(value);
}).then((value) => {
    console.log(value); //foobar
    value += "loo";
    return value;
}).then((value) => { console.log(value); })