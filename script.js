/* 
  Stable sort.

  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

  Time Complexity
    - Best case: O(n log(n)) linearithmic.
    - Average case: O(n log(n)) linearithmic.
    - Worst case: O(n log(n)) linearithmic.

  Space: O(n) linear

  steps:
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the
          previously created merge function.
      - splitting of arrays stops when array can no longer be split.
      - an array of 1 item is by definition sorted, so two arrays of 1 item
          can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Go through both at the same time

//Which ever has a lower number

//Insert into an output array



/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left = [], right = []) {
    let output = []

    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            output.push(left[leftIndex])
            leftIndex++
        } else {
            output.push(right[rightIndex])
            rightIndex++
        }
    }
        while (rightIndex < right.length) {
            output.push(right[rightIndex])
            rightIndex++
        }
        while (leftIndex < left.length) {
            output.push(left[leftIndex])
            leftIndex++
        }
        return output
    }



// console.log(merge(sortedA4,sortedB4));




// mergeSort
const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given numbers being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} numbers
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(numbers = []) {
    if (numbers.length === 1) {
        return numbers
    }

    const middleIndex = Math.floor(numbers.length / 2)

    const left = numbers.slice(0, middleIndex)
    const right = numbers.slice(middleIndex)

    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    return merge(sortedLeft, sortedRight)

}


console.log(mergeSort(numbersRandomOrder));






//End recursion if numbers only has 1 element

//Use the merge function on the result of the recursive call

// if (numbers.length <= 1) {
//     return numbers;
// }

// numbers.sort((a,b) => (a > b ? 1 : 0));

// return merge(mergeSort(left), mergeSort(right));



// console.log(mergeSort(numbersOrdered));
// console.log(mergeSort(numbersRandomOrder));
// console.log(mergeSort(numbersReversed));

//Split the numbers in half


/*****************************************************************************/















/*****************************************************************************/

















