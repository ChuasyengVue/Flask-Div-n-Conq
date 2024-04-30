function sortedFrequency(arr,target) {
    const firstVal = firstFrequency(arr,target);
    if(firstVal === -1) 
        return firstVal;
    
    const lastVal = lastFrequency(arr,target);
    return lastVal - firstVal + 1;
}

function firstFrequency(arr,target){
    let leftSide = 0;
    let rightSide = arr.length - 1;
    // element doesn't exists in array
    let result = -1;

    while(leftSide <= rightSide){
        let middle = Math.floor((leftSide + rightSide) / 2);
        let middleVal = arr[middle];
        

        if(middleVal === target){
            result = middle
            rightSide = middle - 1;
        }
        else
            if(middleVal < target){
                leftSide = middle + 1;
            }
            else{
                rightSide = middle - 1;
            }
        
    }
    return result;
}

function lastFrequency(arr,target){
    let leftSide = 0;
    let rightSide = arr.length - 1;
    // element doesn't exists in array
    let result = -1;

    while (leftSide <= rightSide ){
        let middle = Math.floor((leftSide + rightSide ) / 2);
        let middleVal = arr[middle];
        
        if(middleVal === target){
            result = middle;
            leftSide = middle + 1;
        }
        else if (middleVal < target ){
            leftSide = middle + 1;
        }
        else{
            rightSide = middle - 1;
        }
    }
    return result;
}




//                  L     M     R
// sortedFrequency([1,1,2,2,2,2,3],2)

//                      L M   R
// sortedFrequency([1,1,2,2,2,2,3],2)
module.exports = sortedFrequency