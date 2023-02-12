function swap(x,y,arr){
    let temp= arr[x];
    arr[x]=arr[y];
    arr[y]=temp;
}
function bubbleSort(arr){
    for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length-i;j++){
        if(arr[j]>arr[j+1]){
            swap(j,j+1,arr)

        }
    }
    }
return arr
}
const a=[2,45,81,1,33,99,10,23,2,34]
console.log(bubbleSort(a))
