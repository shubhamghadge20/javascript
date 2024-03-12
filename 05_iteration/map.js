// map - In JavaScript, map() is a method of the Array object. It creates a new array by calling a function on every element of the original array and storing the results in a new array. map() returns the new array, and the original array is unchanged.

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNumers.map( (num)=>{
//   return num+10
// })

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);