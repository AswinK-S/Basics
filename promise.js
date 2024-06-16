//------------------------------------floating promise
// when a promise is created and if its outcome is not handled properly 

// function asynchronous(num){

//     return new Promise((resolve,reject)=>{
//         if(num%2===0){
//             resolve()
//         }else{
//             reject()
//         }
//     })
// }

// asynchronous(2)

// ...........................promise.all()  (all the promise in the iterable should be resolved)

// const p1=Promise.resolve(3)
// const p2=4
// const p3= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject('hi')

//     },2000)
// })

// Promise.all([p1,p3,p2]).then((result)=>{
//     console.log(result);
// }).catch((reject)=>{
//     console.log(reject);
// })

// -------------------------------------------------promise.allSettled() -it will wait to complete all the promises in the iterable to get resolved or rejected

// const p1= Promise.resolve(2)
// const p2= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject('error')
//     },2000)
// })
// const p3='hi'

// Promise.allSettled([p2,p1,p3]).then((result)=>{
//     result.map((item)=>{
//         console.log(item);
//     })
// }).catch((error)=>{
//     console.log(error);
// })

// ---------------------------------------Promise.any() --when all promise are resolved

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('hi')
//     },1000)
// })

// const p2= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(10)
//     },1000)
// })

// const p3= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(10)
//     },1500)
// })

// Promise.any([p2,p1,p3]).then((result)=>{
//         console.log(result);
// }).catch((error)=>{
//     console.log('e',error);
// })


// --------------------when one Promise.any() get rejected

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(1)
//     },1500)
// })

// const p2= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject(0)
//     },1500)
// })

// const p3= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(10)
//     },1500)
// })

// Promise.any([p2,p1,p3]).then((result)=>{
//         console.log(result);
// }).catch((error)=>{
//     console.log('e',error);
// })

// -----------------------------wen all Promise.any() iterables are rejected

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject(1)
//     },1500)
// })

// const p2= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject(0)
//     },1500)
// })

// const p3= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject(10)
//     },1500)
// })

// Promise.any([p2,p1,p3]).then((result)=>{
//         console.log(result);
// }).catch((error)=>{
//     console.log('e',error);
// })

// ------------------------------------------------Promise.race()

const p2= Promise.reject('h')
const p1= Promise.resolve(4)
const p3=Promise.resolve(5)

Promise.race([p3,p1,p2]).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log('e',error);
})
