// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


// describe("shuff", () => {

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
it("a function that takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
    expect(shuff(colors1).toEqual(["green", "yellow", "pink", "blue"]),
        expect(shuff(colors2).toEqual(["periwinkle", "indigo", "aquamarine", "ochre"])

    })
 })

// b) Create the function that makes the test pass.
// Came across while loops in researching this
// While there remain elements to shuffle functions will pick a remaining element...
// And finally it will swap it with the current element
function shuff(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("minmax", () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    //  Expected output: [-8, 90]
    const nums2 = [109, 5, 9, 67, 8, 24]
    //  Expected output: [5, 109]
    it("a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
        expect(minmax(nums1).toEqual([-8, 90]),
            expect(minmax(nums2).toEqual([5, 109]),
     })
})


// b) Create the function that makes the test pass.

// must take in an array. 
// use an empty array
// need to define a variable that contains the min/ max final array.
// iterate over array and filter out all number accept the biggest and smallest numbers using Math.min/ Math.m
// push our new vaules to the empty array Arr

const minmax = (array) => {
    arr = []
    let min = Math.min(...array)
    let max = Math.max(...array)
    arr.push(min, max)
    return arr
}

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe("nodup", () => {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
    // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
    it("a function that takes in two arrays as arguments and returns one array with no duplicate values.", () => {
        expect(nodup(testArray1, testArray2).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
     })
})


// b) Create the function that makes the test pass.

//create a func that takes in 2 arrays 
// need to concat them into a single array will use the spread functing
//filter out all duplicate values by comparing each value's index to the next
// If the value already has an assigned index the iteration moves on.

const nodup = (arr1, arr2) => {
    let newArr = [...arr1, ...arr2]
    return newArr.filter((value, i) => {
        return newArr.indexOf(value) === i
    })
}

