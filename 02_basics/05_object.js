//destructure in javascript

const course ={
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"shubham"
}
 //to print any value in object we use one different method it also use in react.js
 //below we make destructure
const {courseInstructor:instructor} =course

console.log(instructor);

//api in jason
//jason in object like below
// {
//     "name":"shubham",
//     "coursename":"js in hindi",
//     "price":"free"
// }

//jason in array
// [
//     {}
//     {}
//     {}
// ]
