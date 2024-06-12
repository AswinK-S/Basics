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

//----------------------------------------------change all the elements of the array using callback function

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

//----------------------------------------------change all the elements of the array using callback function (use arrow function)
