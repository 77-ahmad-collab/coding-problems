function findMedian(arr) {
    // Write your code here
    arr =arr.sort((a,b)=>a-b);
    const median =arr[ Math.floor(arr.length/2)];
    console.log("🚀 ~ file: findMedian.js:5 ~ findMedian ~ median:", median)
    return median
    

}
findMedian([8,2,3,4,5])