const object={
    name:'Aswin',
    age:24
}

console.log(Object.keys(object).length);
for(const key in object){
    console.log(object[key]);
}

const map = new Map()
map.set(object,'hello')
map.set('a',2)

for(const [key,value] of map){
    console.log('key : ',key,'value :',value);
}