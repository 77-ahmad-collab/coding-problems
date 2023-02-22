function miniMaxSum(arr) {
    // Write your code here
    
    let minSum = 0;
    let maxSum=0;
    let arrayLength =arr.length;
    arr= arr.sort((a,b)=>a-b);
    arr.forEach((number,index)=>{
        if(index !== 0){
            maxSum = maxSum+number;
        }
        if(index !== arrayLength-1  ){
            minSum = minSum+number; 
        }
        
    });
    
     
    console.log(minSum,maxSum);

}
miniMaxSum([1, 2, 3, 4, 5])