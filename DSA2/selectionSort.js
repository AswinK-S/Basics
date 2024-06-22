const array = [5,56,8,-8,9,6,]

function swap(array,i,j){
    let temp =array[i]
    array[i]= array[j]
    array[j]=temp
}

function sort(array){
for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i]>array[j]){
            swap(array,i,j)
        }
    }
}
console.log('sorted array--',array)
}

sort(array)