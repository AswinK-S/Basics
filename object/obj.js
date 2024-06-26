// const object={
//     name:'Aswin',
//     age:24
// }

// console.log(Object.keys(object).length);
// for(const key in object){
//     console.log(object[key]);
// }

// const map = new Map()
// map.set(object,'hello')
// map.set('a',2)

// for(const [key,value] of map){
//     console.log('key : ',key,'value :',value);
// }

//------------------------------------Object.freeze() 
//---------------make an object and its nested objects freeze()

// let obj={
//     name:"Aswin",
//     place:'Kannur',
//     hobby:['movies','travel'],
//     language:{
//         native:'Malayalam',
//         second:'English',
//         third:'Hindi'
//     }
// }

// console.log('before freeze',obj);

// function deepFreeze(obj){
//     let propNames = Object.getOwnPropertyNames(obj)

//     for(const name of propNames){
//         let value =obj[name]
//         if(value && typeof value ==='object'){
//             deepFreeze(value)
//         }
//     }

//     return Object.freeze(obj)
// }

// deepFreeze(obj)
// obj.language.fourth='Tamil'
// obj.place ='Taliparamb'

// console.log('after deepFreeze',obj);

//--------------------------------------object.seal()

// let obj={
//     name:"Aswin",
//     place:'Kannur',
//     hobby:['movies','travel'],
//     language:{
//         native:'Malayalam',
//         second:'English',
//         third:'Hindi'
//     }
// }
// console.log('before making seal--',obj);
// Object.seal(obj)
// delete obj.name
// obj.place='Taliparamb'
// console.log('after making seal',obj);

//Reflect ---
// built in javaScript object that provides methods to do interceptable javascript operations.it provides the same methods of global object 
// but offers more functionalities suitable for metaprograming    

// let obj={
//         name:"Aswin",
//         place:'Kannur',
//         hobby:['movies','travel'],
//         language:{
//             native:'Malayalam',
//             second:'English',
//             third:'Hindi'
//         }
//     }

//     console.log(Reflect.get(obj,'name'));

//-------------------------------------obj.entries()

// let obj={
//     name:"Aswin",
//     place:'Kannur',
//     hobby:['movies','travel'],
//     language:{
//         native:'Malayalam',
//         second:'English',
//         third:'Hindi'
//     }
// }

// console.log(Object.entries(obj))

//--------------------iterate through object

// let obj={
//     name:"Aswin",
//     place:'Kannur',
//     hobby:['movies','travel'],
//     language:{
//         native:'Malayalam',
//         second:'English',
//         third:'Hindi'
//     }
// }
// function object(obj){
//     for(const key in obj){
//         console.log(key,obj[key])
//     }
// }

// object(obj)

//---------------------------filter object

// let obj={
//     name:"Aswin",
//     place:'Kannur',
//     hobby:['movies','travel'],
//     language:{
//         native:'Malayalam',
//         second:'English',
//         third:'Hindi'
//     }
// }

// function filterObj(obj){
//     let filterData= Object.entries(obj).filter(([key,value])=>{
//        return key === 'language'
//     })
//     console.log(filterData);  
//     console.log(Object.fromEntries(filterData));     
// }

// filterObj(obj)

//-----------------------------------------------------convert object to map

// let obj={
//     name:"Aswin",
//     place:'Kannur',
//     hobby:['movies','travel'],
//     language:{
//         native:'Malayalam',
//         second:'English',
//         third:'Hindi'
//     }
// }

// let map= new Map(Object.entries(obj))
// console.log(map)

//--------------------------------------find number with minimum occurrence using hash table

// function minCount(array){
//     let obj={}

//     for(const num of array){
//         if(obj[num]){
//             obj[num]++
//         }else{
//             obj[num]=1
//         }
//     }

//     let minC= Infinity
//     let minimum = null
//     for(const [key,value] of Object.entries(obj)){
//         if(value<minC){
//             minC=value
//             minimum=key
//         }
//     }
//     console.log(` count of ${minimum} is ${minC}`)
// }
// const array = [3, 1, 4, 1, 2, 2, 3, 5, 1, 3, 4, 5, 5];
// minCount(array)

//----------------------------------remove last key-value pair from object
// const obj = {
//     name: "Alice",
//     age: 30,
//     profession: "Engineer",
//     country: "USA"
// };

// console.log('obj before deleting last key',obj);

// function deleteLastKey(obj){
//     let keys = Object.keys(obj)
//     let lastKey=keys[keys.length-1]
//     delete obj[lastKey]
//     console.log('object after deleting last key',obj);
// }