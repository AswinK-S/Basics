const array = [5,56,8,-8,9,6,-1]

function insertionSort(array){
    for(let i=0;i<array.length;i++){
        let key= array[i]
        let j=i-1

        while (j>=0&&array[j]>key){
            array[j+1]=array[j]
            j=j-1
        }
        array[j+1]=key
    }

    console.log('insertion sort',array);
}

insertionSort(array)