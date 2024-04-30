function findRotatedIndex(arr, num) {
    const pivot = findPivot(arr);

    if (pivot === 0 || num < arr[0]){
        return binarySearch (arr,num,pivot, arr.length - 1);
    }
    else {
        return binarySearch (arr,num,0,pivot - 1);
    }
}

function binarySearch(arr, num,left,right){


    if(arr.length === 0) return -1;
    if(num < arr[left] || num > arr[right]) return -1;

    while (left <= right){
        const mid = Math.floor((left + right ) / 2);
        const midVal = arr[mid];

        if( midVal == num){
            return mid;
        }
        else if(midVal < num){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return -1;
}

function findPivot(arr){

    let left = 0;
    let right = arr.length -1;

    if (arr[left] < arr[right]) return 0;


    while ( left <= right ) {
        const mid = Math.floor ((left + right) / 2);
        let midVal = arr[mid];

        if(midVal > arr[mid + 1] ) {
            return mid + 1;
        }
        else if (arr[left] <= midVal) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return 0;
}


//   L M    R
// ([3,4,1,2],4)
module.exports = findRotatedIndex