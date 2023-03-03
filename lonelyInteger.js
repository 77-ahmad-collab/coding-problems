// Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a) {
    // Write your code here
    let dictionary= {}
    a.forEach((number)=>{
        if(dictionary[number]){
            delete dictionary[number]
        }else {
            Object.assign(dictionary,{[number]:1})
        }
    })
 
    
    return Object.keys(dictionary)[0]

}

a([1,2,3,4,3,2,1])
