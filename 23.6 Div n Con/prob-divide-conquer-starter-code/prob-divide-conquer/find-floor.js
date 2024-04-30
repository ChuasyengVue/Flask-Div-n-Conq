function findFloor(arr, target) {

    let left = 0;
    let right = arr.length -1;
    let val = -1;

    if(left > right) return -1;
    if(target >= arr[right]) return arr[right];

    while(left <= right){

        const mid = Math.floor((left + right) / 2);
        let midVal = arr[mid];

        if(target === midVal){
            return midVal;
        }
        else if (midVal < target){
            left = mid + 1;
            val = mid;
        }
        else {
            right = mid - 1;
        }
    }

    return val !== -1 ? arr[val] : undefined;

}

module.exports = findFloor