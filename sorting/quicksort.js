const quicksort=(arr)=>{
    if(arr.length<=1){
        return arr;
    }
    const leftArr=[];
    const rightArr=[];
    const Pivot=arr[arr.length-1];
    for(i=0;i<arr.length-1;i++){
        if(arr[i]<Pivot){
            leftArr.push(arr[i])
        }
        else{
            rightArr.push(arr[i]);
        }
        
    }
    return [...quicksort(leftArr) ,Pivot,...quicksort(rightArr)];
}
const a=[2,45,81,1,33,99,10,23,2,34]
console.log(quicksort(a))