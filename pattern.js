
// print the array in this order

//  3 
//  1 1 1
//  2 2 2 2
//  4 4
//  1 1 1 1 1
//  5
//  6 6 6
//  3 3 3 3 3 3

let arr=[[3,1],[2,4],[1,5],[6,3]]
for (let i=0;i<arr.length;i++){
        if(arr[i][0]){
            let a=''
            for(let j=0;j<arr[i][1];j++){
                a+=arr[i][0]
            }
            console.log(a);
        }if(arr[i][1]){
            let b=''
            for(let j=0;j<arr[i][0];j++){
               b+=arr[i][1] 
            }
            console.log(b);
        }
}


