
//--------------------------------------------------------------reverse the array
// const array =[[1,2],3,[4],[5,6],7]
// let i=0
// function reverse(array){
//     const newArray=[]
//     while (array.length){
//         newArray[i]=array.pop()
//         i++
//     }
//     console.log(newArray);
// }

// reverse(array)

//------------------------------------------------------------sum of prime numbers

// const array=[1,2,3,4,4,5,6,7,86,4]
// let sum=0

// function sumOfPrime(array){
//     for(let i=0;i<array.length;i++){
//         let flag=0
//         if(array[i]===1){
//             flag=1
//         }
//         for(let j=2;j<array[i];j++){
//             if(array[i]%j===0){
//                 flag=1
//             }
//         }
//         if(flag===0){
//             sum+=array[i]
//         }
        
//     }

//     console.log(sum);
// }

// sumOfPrime(array)

//----------------------------------------------------------find the second largest

// const array = [1, 2, 3, 4, 5, 5]

// function second(array) {
//     let max = array[0]
//     let secondMax = array[1]

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             secondMax = max
//             max = array[i]
//         } else if (array[i] > secondMax && array[i] < max) {
//             secondMax = array[i]
//         }
//     }

//     console.log(secondMax);
// }

// second(array)

//---------------------------------------------find the longest string in the array

// const strings = ["short", "medium", "a very long string", "longer"];
// let length=0
// // for(let i=0;i<strings.length;i++){
// //     if(strings[i].length>length){
// //         length=strings[i].length
// //     }
// // }
// // console.log('longest--'.length);

// ----------------------------------------- using map find the longest string and its length

const strings = ["short", "medium", "a very long string", "longer"];

let length =0
const result=strings.map((item)=>{
    if(item.trim().length>length){
       return length=item.trim().length
    }
})
console.log(result);

