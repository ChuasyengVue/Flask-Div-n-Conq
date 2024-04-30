function findRotationCount(arr) {
  
    let left = 0;
    let right = arr.length - 1;

    while (left <= right){
        
        if (arr[left] <= arr[right]) return left;
        
        const mid = Math.floor((left + right) / 2);
        const midVal = arr[mid];
        const next = arr[mid + 1];
        const prev = arr[mid - 1];

        if( midVal <= next && midVal <= prev){
            return mid;
        }
        else if (midVal <= arr[right]){
            right = mid - 1;
        }
        else if (midVal >= arr[left]){
            left = mid + 1;
        }
    }
    return 0;
}

module.exports = findRotationCount