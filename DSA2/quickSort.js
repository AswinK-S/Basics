function quickSort(array){
    if(array.length<2){
        return array
    }

    let pivot = array[0]
    let left=[]
    let right=[]
    for(let i=1;i<array.length;i++){
     if(array[i]< pivot){
        left.push(array[i])
     }  else{
        right.push(array[i])
     } 
    }

    return [...quickSort(left),pivot,...quickSort(right)]
}

const array = [5,56,8,-8,9,6,-1,12,5.6]
console.log(quickSort(array));