/* DEC 16

Write a recursive function. Make it stop at some point. 

Bonus: Write a recursive function that console.log all the elements of an array.
*/


// First Solution (using shift on array copy)
const recursiveShiftLog = (arr) => {
  let tempArr = [...arr];
  console.log(tempArr.shift());
  if (tempArr.length > 0) {
    return recursiveShiftLog(tempArr);
  }
}

// Second Solution (using nondestructive recursive slices)
const recursiveSliceLog = (arr) => {
  arr[0] !== undefined
    ? console.log(arr[0])
    : console.log(arr);
  if (arr.length > 1) {
    return recursiveSliceLog(arr.slice(1));
  }
}


const input1 = [1, 2, 3, 4, 5];
const input2 = ["a", 1, "b", 0, "c", ["abc"], -11];
const input3 = ["pi", 3.14, null, 4, "fifth"];
const input4 = [];

console.log("input1: ", input1);
recursiveShiftLog(input1);
console.log("\ninput2: ", input2);
recursiveShiftLog(input2);
console.log("\ninput3: ", input3);
recursiveShiftLog(input3);
console.log("\ninput4: ", input4);
recursiveShiftLog(input4);

console.log("\ninput1: ", input1);
recursiveSliceLog(input1);
console.log("\ninput2: ", input2);
recursiveSliceLog(input2);
console.log("\ninput3: ", input3);
recursiveSliceLog(input3);
console.log("\ninput4: ", input4);
recursiveSliceLog(input4);
