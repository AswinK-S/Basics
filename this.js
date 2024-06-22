// what will be the output of this"

// console.log(this);

// -------------------------------------when a function is called inside a function

// {function callThis(){
//     console.log(this)
// }

// callThis()}


//---------------------------------log this inside a method in an object

// let obj={
//     name:'Aswin',
//     callThis:function a(){
//         console.log(this.name)
//     }
// }

// obj.callThis()

// ----------------------------------------globalThis 

// function canMakeHTTPRequest() {
//     console.log('globalThis---', globalThis.XMLHttpRequest === 'function'); 
//     console.log('this--', this.XMLHttpRequest === 'function');;

//   }
  
// canMakeHTTPRequest()