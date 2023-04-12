'use-strict'

// function binarySearch(arr, target){
//     let left = 0;
//     let right = arr.length -1;

//     while(left <= right){
//         const middle = Math.floor((left + right) / 2);

//         if(arr[middle] === target){
//             return middle
//         } else if(arr[middle] > target){
//             right = middle - 1;
//         } else {
//             left = middle + 1;
//         }
//     }
//     return -1;
// }
// const arr = [2, 4, 6, 8, 10, 12, 14, 16]
// console.log('Searched Value is =', binarySearch(arr, 14))


// function hasName(array, target){
//     let newCharArray = [];
//     let left = 0;
//     let right = array.length - 1;
//     while(left <= right){
//         const middle = Math.floor((left + right) / 2);
//         if(array[middle].includes(target)){
//             newCharArray.push(array[middle]);

//             let i = middle - 1, j = middle + 1;
//             while(i >= left && array[i].includes(target)){
//                 newCharArray.push(array[i]);
//                 i--
//             }
//             while(j <= right && array[j].includes(target)){
//                 newCharArray.push(array[j]);
//                 j++
//             }
//             return newCharArray;
//         } else if ( target < array[middle]){
//             right = middle - 1;
//         } else {
//             left = middle + 1;
//         }
        
//     }
//     return newCharArray;
// }


// const charArray = ['ayomide', 'kehinde', 'kabiyesi', 'nahimat',  'taiye', ];

// console.log('Your new Characters Array is = ', hasName(charArray, 't'))

const array = [4, 2, 6, 20, 8, 9, 10, 22, 21, 18, 16];
// const selectionSort = (
//     function(array){
//         const length = array.length;
//         for( let i = 0; i < length; i++){
//             let minValue = array[i];
//             let minIndex = i;
//             for( let j = minIndex + 1; j < length; j++){
//                 if(array[j] < minValue){
//                     minIndex = j;
//                     minValue = array[j];
//                 }
//             }
//             if(minIndex !==  i){
//                 let temp = array[i];
//                 array[i] = array[minIndex];
//                 array[minIndex] = temp;
//             }
//         }
//         return array;
//     }
// )(array);

// console.log('Your selected sort array is now :-', selectionSort)

// const sortedBinarySearch = (function(array, target){
//     let len = array.length;
//     let left = 0;
//     let right = len - 1;

//     for( let i = 0; i < len; i++){
//         let minValue = array[i];
//         let minIndex = i;

//         for( let j = minIndex + 1; j < len; j++){
//             if(array[j] < minValue){
//                 minIndex = array[j];
//                 array[j] = minValue;
//             }
//         }
//         if(minIndex !== i){
//             let temp = array[i];
//             array[i] = array[minIndex];
//             array[minIndex] = temp;
//         }
//     }
//     while(left <= right){
//         let mid = Math.floor(( left + right ) / 2);
//         if(array[mid] === target){
//             return mid;
//         } else if(array[mid] > target) {
//             right = mid - 1;
//         } else {
//             left = mid + 1
//         }
//     }
    
// })(array, 20);

// console.log('Your selected sort binary search item is :-', sortedBinarySearch)
// O(n2)
// (function(n){
//     for(let i= 0; i<n.length; i++){
//         for(let j=0; j<n.length; j++){
//             console.log(i,j)
//         }
//     }
// })([2,4,6,8,10,12,14]);

// O(n3)
// (function(n){
//     for(let i= 0; i<n.length; i++){
//         for(let j=0; j<n.length; j++){
//             for(let k=0; k<n.length; k++){
//                 console.log(i,j,k)
//             }
//         }
//     }
// })([2,4,6,8,10,12,14])

// O(log n)
// let newArray = [];
// function searchedArray(n, target){
//     if(n===0) return 'No Asymptote Nature Found';
//     while(n > 0){  
//         n=Math.floor(n/2);
//         newArray.push(n); 
//     }
//     if(n === 0){
//         let leftOrder = 0;
//         let rightOrder  = newArray.length - 1;

//         for( let i = 0; i < newArray.length - 1; i++){
//             let minIndex = i;
//             for( let j = i + 1; j < newArray.length; j++){
//                 if(newArray[j] < newArray[i]){
//                     minIndex = j;
//                 }
//             };

//             if(minIndex !== i){
//                 let temporal = newArray[i];
//                 newArray[i] = newArray[minIndex];
//                 newArray[minIndex] = temporal;
//             }
//         }

//         while(leftOrder <= rightOrder){ 
//             let middleOrder = Math.floor( ( leftOrder + rightOrder ) / 2 );
//             if(newArray[middleOrder] === target){
//                 return target;
//             } else if(newArray[middleOrder] > target){
//                 rightOrder = middleOrder - 1;
//             } else {
//                 leftOrder = middleOrder + 1;
//             }
//         }
//         return -1;
//     }
//     return searchedArray(n, target)
// };
// console.log('Your new sorted array is now :-',newArray, '\n', ', while your searched item is at index :-', searchedArray(68, 8));

// O(n*log n)

// (function(n){
//     let y = n;
//     while(n > 1){
//         n = Math.floor(n/2);
//         for(let i = 0; i < y; i++){
//             console.log(n, i);
//         }
//     }
// })(64);

// Merge sort and O(n*log n)

// function sortedArray(arr){//O(log n)
//     if(arr.length < 2){ //O(1)
//         return arr;
//     };

//     //Dividing and Splitting the array into two halves using slice method;
//     const middle = Math.floor( arr.length / 2 );//O(1)
//     const left = arr.slice(0, middle);//O(1)
//     const right = arr.slice(middle, arr.length);//O(1)

//     // Recursively calling the left and right halve arrays and sorting
//     const leftArray = sortedArray(left);//O(log n)
//     const rightArray = sortedArray(right);//O(log n)

//     // Merging the two sorted halve arrays
//     console.log('The halves', leftArray, rightArray)//O(1)
//     return merger(leftArray, rightArray);//O(n)
// }
// const arr = [3,7,6,9,2,10,16];
//  console.log(sortedArray(arr));
// // T = O(1) + O(1) + O(1) + O(1) + O(log n) + O(log n) + O(n);
// // Dropping all constants, the T= O(log n) + O(log n) + O(n) = O(log n) * O(n) = O(n*log n).
// // We uses multiplication because the merger which has lineear time complexity O(n) is nested inside the 
// // sorted array which has the lorgarithmic time complexity O(log n), therefore making sortedArray 
// // eventually becomes linearithmic complex in nature.

// function merger(leftArray, rightArray){
//     // Declaring base indexes,and resulting array
//     let rightIndex = 0;
//     let leftIndex = 0;
//     let resultingArray = [];//O(1)

//     // Using a while loop to merge the two halve arrays, in a sorted manner
//     while(leftIndex < leftArray.length && rightIndex < rightArray.length){
//         if(leftArray[leftIndex] < rightArray[rightIndex]){
//             resultingArray.push(leftArray[leftIndex]);
//             leftIndex++;
//         } else {
//             resultingArray.push(rightArray[rightIndex]);
//             rightIndex++;
//         }
//     };//O(n)
 
//     // Adding the remaining indices left in the left or right halve arrays.
//     while(leftIndex < leftArray.length){
//         resultingArray.push(leftArray[leftIndex]);
//         leftIndex++;
//     };//O(n)
//     while(rightIndex < rightArray.length){
//         resultingArray.push(rightArray[rightIndex]);
//         rightIndex++;
//     };//O(n)
//     console.log('This is now our merge sorted Array :-', resultingArray)
//     return resultingArray;
//     // return resultingArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
// }

// function reverseString(string){
//     let result = '';
//     let len = string.length - 1;
//     for( let i = len; i >= 0; i--){
//         result += string[i];
//     }
//     console.log('Here is the reversed string :-', result)
// }
// reverseString('Thisonemadoo')

// function sortedArrayOfStrings(stringsArray){
//     if( stringsArray.length < 2 ){
//         return stringsArray;
//     }
//     // Dividing and conquer approach
//     let midIndex = Math.floor(stringsArray.length / 2);
//     let left = stringsArray.slice(0, midIndex);
//     let right = stringsArray.slice(midIndex, stringsArray.length);

//     // Recursively calling the two halve arrays
//     const leftArr = sortedArrayOfStrings(left);
//     const rightArr = sortedArrayOfStrings(right);
//     console.log(leftArr, rightArr)
//     // Merging the two array, and other any left string
//     return merging(leftArr, rightArr)
// }

// function merging(leftArr, rightArr){
//     // Defining the minIndexes for left,and rigth array, also for the new result array
//     let leftIndex = 0;
//     let rightIndex = 0;
//     let resultArray = [];
//     // Using while loop to merge the two arrays and any other left item(s) if possible
//     while(leftIndex < leftArr?.length && rightIndex < rightArr?.length){
//         if(leftArr[leftIndex] < rightArr[rightIndex]){
//             resultArray.push(leftArr[leftIndex]);
//             leftIndex++;
//         } else {
//             resultArray.push(rightArr[rightIndex]);
//             rightIndex++;
//         }
//     }
//     while(leftIndex < leftArr?.length){
//         resultArray.push(leftArr[leftIndex]);
//         leftIndex++;
//     }
//     while(rightIndex < rightArr?.length){
//         resultArray.push(rightArr[rightIndex]);
//         rightIndex++;
//     }
//     // Swapping cases among each strings characters
//     for( let i = 0; i < resultArray.length; i++){
//         let oldString = resultArray[i];
//         let newString = '';
//         for (let j = 0; j < oldString.length; j++) {
//             if (oldString[j] === oldString[j].toUpperCase()) {
//                 newString += oldString[j].toLowerCase();
//             } else {
//                 newString += oldString[j];
//             }
//         }
//         resultArray[i] = newString;
//     }
//     return resultArray;
// }
// const stringsArray = ['Olufunke', 'Muyiwa', 'Ayomide', 'Kolade', 'tUMINInu'];
// console.log('Sorted Array :-', sortedArrayOfStrings(stringsArray));

// function selectionSorts(arr){
//     for( let i = 0; i < arr.length; i++){
//         let firstIndex = i;
//         let firstValue = arr[i];
//         for( let j = firstIndex + 1; j < arr.length; j++){
//             if(arr[j] < firstValue){
//                 firstIndex = j;
//                 firstValue = arr[j];
//             }
//         } 
//         if(firstIndex !== i){
//             let temp = arr[i];
//             arr[i] = arr[firstIndex];
//             arr[firstIndex] = temp;
//         }
//     }
//     return arr;
// }
// const ararara = ['sisieko', 'kabikanka', 'ageolu', 'ajajaguna'];
// console.log('Here is the sorted array : -', selectionSorts(ararara))

function insert(arr){
    for( let i = 1; i < arr.length; i++){
        let lowerIndice = i - 1;
        let higherValue = arr[i];

        while( lowerIndice >= 0 && arr[ lowerIndice ] > higherValue ){
            arr[ lowerIndice + 1 ] = arr[ lowerIndice ];
            lowerIndice--;
        }
        arr[ lowerIndice + 1 ] = higherValue;
    }
    return arr;
}
console.log('Array now sorted', insert([9, 8, 2, 4, 7, 6, 1]));

var factorial = function(n) {
    var result = 1;

    for( var i = 1; i <= n; i++){
        result *=i;
    
    }
    return result;
};

console.log('Factorial 5! =', factorial(-1));