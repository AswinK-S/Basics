// ==========================================================find the unmatched element 

// const array =[1,2,3,4,5]
// const array1 = [4,5,6,7,8]

// function unique(array,array2){
//     const newArray = [...array,...array2]
//     let result =[]
//     console.log(newArray);
//     let obj={}
//     for(let i=0;i<newArray.length;i++){
//         if(obj[newArray[i]]){
//             obj[newArray[i]]++ 
//         }else{
//             obj[newArray[i]]=1
//         }
//     }

//     for( key in obj){
//         if(obj[key]===1){
//             result.push(key)
//         }
//     }

//     console.log(result);
// }
// unique(array,array1)

// =================================================================reverse string inplace using recursion
// const str='ASWIN KS'

//=====================================================reverse stack using recursion


// -----------------------------------------------------linear search find index
//  const array =[5,4,6,7,8,1,2,3]
//  const target = 1

//  function search(array,target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]===target){
//             console.log(`index of ${array[i]} is ${i}`);
//             break;
//         }
//     }
//  }

//  search(array,target)

//=======================================================binary search (time complexity Olog2n)

//  const array =[5,4,6,7,8,1,2,3]
//  const target = 6

//  function binary(array,target){
//     let start =0
//     let end=array.length-1
//     while(start<=end){
//         let mid = Math.floor((start+end)/2)
//         if(target === array[mid]){
//             console.log('got target');
//             return
//         }else if(array[mid]<target){
//             start=mid+1
//         }else{
//             end = mid-1
//         }
//     }
//     console.log('not found');
//  }

//  binary(array,target)

//============================================================recursive binary search
// function recursiveBinarySearch(array,t){

//     console.log('called');
//     let mid =Math.floor(array.length/2)
//     if(array.length===1 && t!==array[0]){
//         return false
//     }
//     else if(t===array[mid]){
//         return true
//     }else if(t<array[mid]){
//         return recursiveBinarySearch(array.slice(0,mid),t)
//     }else{
//         return recursiveBinarySearch(array.slice(mid+1),t)
//     }
// }

//  const array =[1,2,3,4,5,7,8,9]
//  const target = 6

// console.log(recursiveBinarySearch(array,target)); 

//-------------------------------------------------typed arrays
    // These are array-like objects that allow developers to directly manipulate binary data in memory buffer. It will be useful while dealing
    // with platform featuers such as audios and videos manipulation, access to raw data using websockets and so on.

// const array =new Int16Array(4)
// console.log(array.length);

//---------------------------------------eval()
//  its a global function that execute the  javascript code  mentioned in string  according to the current execution enviornment

// const result = '6+3'
// console.log( eval(result));
// console.log( typeof eval(result));
// console.log( result);

//-----------------------------function call using eval()

// function sum (a,b){
//     return a+b
// }

// const result = "sum(20,5)"
// console.log(result);
// console.log(eval(result));

//--------------------------------labels 
//  it is a technique in js to name a loop or block of code.  its defined using writing an identifier followed by colon `:`.

// outerloop:for(let i=0;i<4;i++){
//     for(let j=0;j<4;j++){

//         if(i==1 && j==1){
//             continue outerloop;
//         }
//         console.log(`i =${i} , j= ${j}`);
//     }
// }


// outerLoop:for(let i=0;i<3;i++){
//     for(let j=0;j<3;j++){
//         if(i==1 && j==1){
//             break outerLoop;
//         }
//         console.log(`i= ${i}, j= $${j}`);
//     }
// }

//-------------------------------------------------JIt - just in time compilation




// function add(n){
//     console.log(`${n} = ,${n+n}`);
// }
// console.time();
// for(let i=0;i<100;i++){
//     add(i)
// }
// console.timeEnd();

//------------------------------------------------------fibonacci series under 100 using recursion

function fibonacci(i){
    if(i<=1){
        return i
    }

    return fibonacci(i-1)+fibonacci(i-2)
}

function limit(num){

    let arr=[]
    let fibSum
    let i=0
    while(true){
        fibSum= fibonacci(i)
        if(fibSum>=num){
            break;
        }
        arr.push(fibSum)
        i++;
    }
    console.log(arr)
}
limit(100)