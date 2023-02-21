function plusMinus(arr) {
    // Write your code here
    let [arraySize,positiveValuesCount,negativeValuesCount,zeroValuesCount]= [0,0,0,0];
    arr.forEach((number)=>{
        arraySize = ++arraySize;
        if(number===0){
            zeroValuesCount = ++zeroValuesCount;
        }else if (number > 0){
            positiveValuesCount = ++positiveValuesCount;
        }else if(number <0){
            negativeValuesCount = ++negativeValuesCount
        }
    });

    console.log((positiveValuesCount/arraySize).toFixed(6));
    console.log((negativeValuesCount/arraySize).toFixed(6));
    console.log((zeroValuesCount/arraySize).toFixed(6));

}

plusMinus([-4, 3, -9, 0, 4, 1])