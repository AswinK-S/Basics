function split(array){
    if(array.length<2){
        return array
    }

    let mid= Math.floor(array.length/2)
    let left = array.slice(0,mid)
    let right = array.slice(mid)
    return merge(split(left),split(right))
}

function merge(left,right){
 let sort=[]
 while(left.length && right.length){
    if(left[0]<right[0]){
        sort.push(left.shift())
    }else{
        sort.push(right.shift())
    }
 }
 return [...sort,...left,...right]
}

const array = [5,56,8,-8,9,6,-1,12,5.6]
console.log('merge sort', split(array));
