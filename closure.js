
//-------------------------------------------------------------closure (combination of fuction bundeled together with the reference its lexical environment)
// let c=10
// {
//     let c=12
//     function  print(){
//         console.log(c)
//     }
// }
// console.log('c',c);
// print()


// ---------------The following code illustrates how to use closures to define public functions that can access private functions and variables.

// function private(){
//     let PrivateVar= 10

//   function increment(){
//         PrivateVar++;
//     }

//       function decrement(){
//         PrivateVar--;
//     }

//       function value(){
//         console.log(PrivateVar);
//     }
//     return{
//         increment,
//         decrement,
//         value
//     }
// }

// let a = private()
// console.log(a.value());
// a.increment();  
// a.increment();
// a.increment();
// console.log(a.value());
// a.decrement();
// console.log(a.value());

//------------------------------------------------
// function foo(){
//   let arr=[]
//   let i 
//   for( i=0;i<4;i++){
//     arr[i]=function (){
//       return i
//     }
//   }
//   return arr
// }

// let getArr=foo()

// console.log(getArr[0]());

// ----------------------------------------------
// function foo(){
//   let arr=[]
//   for(let i=0;i<4;i++){
//     arr[i]=function (){
//       return i
//     }
//   }

//   return arr
// }

// let array = foo()
// console.log(array[0]());

//---------------------------------------- create counter using closure

// function counter(){
//   let count=0
//   return function(){
//     count ++
//     console.log(count);
//   }
// }

// let counter1= counter()
// counter1()
// counter1()
// let counter2 =counter()
// counter2()