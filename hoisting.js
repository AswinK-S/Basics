//----------------------------------------------------------------------------------------hoisting
// console.log(a);
// b()

// var a ='aswin'
// function b(){
//     console.log('hello');
// }
// ---------------------------------------------------------------------------------//arrow function

// console.log(a);
// let a =10

// let b =()=>{

//     console.log('hello');
// }
// -----------------------------------------------------------------------
// console.log('Hello')

// setTimeout(()=>{
//     console.log('timer');
// },2000)

// console.log('HI');
//-------------------------------------------------------------

// const seconds = new Date().getTime()/1000

// setTimeout(()=>{
//     console.log(`${new Date.getTime()/1000-seconds}seconds`);
// },500)

// while(true){
//     if(new Date().getTime()/1000-seconds>=2){
//         console.log('looped ');
//         break;
//     }
// }

// --------------------------------------------------------------------------create random pasword
// function password() {

//    const Str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//    const Spl = '!@#$%^&*,>'
//    const num = '1234567890'
//    let pass =''
//    while(pass.length <=9) {
//       let randomStrI = Math.floor(Math.random() * Str.length)
//       let randomSplI = Math.floor(Math.random() * Spl.length)
//       let randomNumI = Math.floor(Math.random() * num.length)
//       pass += Str[randomStrI] +Spl[randomSplI] + num[randomNumI]
//    }
//    return pass
// }


// console.log('password -', password())

// function password(){
//    let String ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//    let Spl ='!#$%$^&*>'
//    let num = '1234567890'
//    pass =''

//    for(let i=0;i<10;i++){
//       if(pass.length<3){
//          pass+= String.charAt(Math.floor(Math.random()*String.length))
//       }else if(pass.length<6){
//             pass+=Spl.charAt(Math.floor(Math.random()*Spl.length))
//       }else{
//          pass += num.charAt(Math.floor(Math.random()*num.length))
//       }
//    }

//    return pass.split('').sort(function(){return .5 -Math.random()}).join('')
// }

// console.log('password ',password());

//------------------------------------------------------------------random otp

// function otp(){
//    let num='1234567890'
//    let otp=''
//    for(let i=0;i<6;i++){
//       let randomIndex = Math.floor(Math.random()*num.length)
//       otp += num[randomIndex]
//    }
//    return otp.split().sort(function(){return 0.6 - Math.random() }).join('')
// }

// console.log('otp-->',otp());

//-------------------------------------------------------