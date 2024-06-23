function bubbleSort(array){
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-i-1;j++){
            if(array[j]>array[j+1]){
                let temp =array[j]
                array[j]=array[j+1]
                array[j+1]=temp
                flag=1
            }
           
          
        }
        
    }      

    console.log('Bsorted array',array);
}

const array = [5,56,8,-8,9,6,-1]
 bubbleSort(array)