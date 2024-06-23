
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

// const strings = ["short", "medium", "a very long string", "longer"];

// let length =0
// const result=strings.map((item)=>{
//     if(item.trim().length>length){
//        return length=item.trim().length
//     }
// })
// console.log(result);

// -------------------------------sort the array using selection sort 
// const subjects = [
//     { name: 'Math', score: 85 },
//     { name: 'Science', score: 92 },
//     { name: 'English', score: 78 },
//     { name: 'History', score: 88 },
//     { name: 'Art', score: 95 },
//     { name: 'Physical Education', score: 67 },
//     { name: 'Music', score: 73 }
// ];

//---------------------------------------------------remove only the adjacent even numbers

// const array = [2,3,4,6,7,5,7,8,1]
// function removeEven(array){
//     let arr=[]
//     let i=0
//     while(i< array.length){
//         if(array[i]%2===0 && array[i+1]%2 === 0){
//             while(i<array.length && array[i]%2==0){
//                 i++
//             }
//         }else{
//             arr.push(array[i])
//             i++
//         }
//     }
//     console.log('array after removing the adjacent even numbers',arr)
// }

// removeEven(array)

//------------------------------------- remove only the adjacent odd numbers form the given array
// const  array=[7, 5, 3, 2, 8, 1, 9]
// function removeOdd(array){
//     let arr=[]
//     let i=0
//     while(i<array.length){
//         if(array[i]%2!==0 && array[i+1]%2 !==0 ){
//             while(i<array.length && array[i]%2 !==0){
//                 i++
//             }
//         }else{
//             arr.push(array[i])
//             i++
//         }
//     }

//     console.log('array after removing the adjacent odd numbers from the given array',)
//     console.log(arr);
// }

//  removeOdd(array)

