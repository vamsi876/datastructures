function swap(x,y,arr){
    let temp= arr[x];
    arr[x]=arr[y];
    arr[y]=temp;
}
function selectionSort(arr){
    var i, j, min;
    for(i=0;i<arr.length;i++){
        min=i;
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j;
                
            }
            
        }
        swap(min,i,arr)

    }
    return arr
}
const a=[2,45,81,1,33,99,10,23,2,34]
console.log(selectionSort(a))
