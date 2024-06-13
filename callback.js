// function higher(callback){
//     setTimeout(()=>{
//         callback()
//     },2000)
// }
// console.log('hello');

// function callback(){
//     console.log('aswin');
// }

// higher(callback)


//------------------------------sychronous callback to convert a string to upper case


// function main(input,callback){
//     callback(input)
// }

// function toUpperCase(str){
//     const result = str.toUpperCase()
//   console.log(result);
// }

// main('hello i am input',toUpperCase)

//----------------------------------------------change all the elements of the array using callback function -synchronous callback

// let array = [1,2,3,4]

// function addTwo(array){
//     for(let i=0;i<array.length;i++){
//         array[i]= array[i]+2
//     }
//     return array
// }

// function higher(callback,array){
//     return callback(array)
// }

// const result = higher(addTwo,array)
// console.log(result);

//----------------------------------------------change all the elements of the array using callback function (use arrow function)-synchronous callback
// let array =[1,2,3,4]
// function higher(array,callback){
//     callback(array)
// }

// higher(array,()=>{
//     for (let i=0;i<array.length;i++){
//         if(array[i]%2===0){
//             array[i]=array[i]+1
//         }
//     }
// //     console.log(array);
// })

//-------------------------------------asychronous callback
// let result='hello'
// console.log(result);
// function higher(array,callback){
//     setTimeout(()=>{
//        return callback(array)
//     },2000)
// }

//  higher([1,2,3,4],(array)=>{
//     for(let i=0;i<array.length;i++){
//         array[i]= array[i]*2
//     }
//      result = array
//      log()
// })
// console.log('hi');
// function log(){
//     console.log(result);
// }


//-------------------------------------------------nested callback

// let a=9
// let b=8

// function sum(callback){
//    return callback(a,b)

// }

// function findSum(a,b){
//     return  a+b
// }

// function mult(callback){
//     const result = sum(findSum)
//     return callback(result)
// }

// function div(){
//     const result = mult((result)=>{
//         return result * 3
//     })
//     console.log(result/2);
// }

// div()
// ------------------------------------------------------
// const a = 9
// const b = 8

// function sum(a,b) {
//     return a + b
// }

// function findSum(callback) {
//     setTimeout(() => {
//         const result= sum(a, b)
//         console.log('sum---',result);
//         return callback(result)
//     }, 2000)
// }

// function mult(callback) {
//     findSum((result) => {
//         setTimeout(() => {
//             const multRslt = result * 3
//             console.log('mult result--',multRslt);
//             callback(multRslt)
//         }, 2000)
//     })
// }

// function div() {
//       mult((multRslt) => {
//         const divRslt = multRslt/2
//         console.log('div rstlt--',divRslt);
//     })

// }

// div()

// ---------------------------------------------------------------nested asynchronous callback 

let week=26
function one(){
    console.log(`Boarding week 1 ${week}`)
}

function two(callback){
    setTimeout(()=>{
        one()
        callback()
    },1000)
}

function three(callback){
    two(()=>{
        setTimeout(()=>{
            console.log(`Boarding week 2  ${week+1}`);
            callback()
        },1000)
    })
}

function four(callback){
        three(()=>{
            setTimeout(()=>{
            console.log(`Toi week ${week+2}`);
            callback()
            },1000)
        })
   
}

function five(){
    four(()=>{
        setTimeout(()=>{
            console.log('JOB')
        },1000)
    })
}

five()