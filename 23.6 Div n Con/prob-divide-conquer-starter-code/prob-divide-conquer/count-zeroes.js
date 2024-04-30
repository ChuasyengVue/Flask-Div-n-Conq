function countZeroes(arr) {
    let leftSide = 0;
    let rightSide = arr.length -1;

    
    while(leftSide <= rightSide){
        let middle = Math.floor((leftSide + rightSide ) / 2);

        if(arr[middle] === 1){
            left = middle + 1;
        }
        else{
            if(middle === 0 || arr[middle - 1] === 1){
                return arr.length - middle;
            }
            else{
                rightSide = middle - 1;
            }
        }
        
    }
    return 0;
}

//   L   M   R 
// ([1,0,0,0,0])

//     L     R
// ([1,0,0,0,0])
module.exports = countZeroes 