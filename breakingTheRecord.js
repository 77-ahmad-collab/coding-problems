function breakingRecords(scores) {
    // Write your code here
    let [minimumScore,maximumScore,minCount,maxCount]=[0,0,0,0];

    scores.forEach((element,index) => {
        if(index ===0)  {
            minimumScore =maximumScore = element;
     
        }
        if(element<minimumScore) {
            minimumScore = element;
            minCount +=1
        };
        if(element> maximumScore){
            maximumScore =element;
            maxCount +=1
        }
    });
 return [maxCount,minCount]

}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])