// const tinderUser = new Object{}

const tinderUser ={}
tinderUser.id = "123abc"
tinderUser.name="shubh"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email:"shubs@123",
    fullname :{
        userfullname:{
            firstname:"shubham",
            lastname:"Ghadge"
        }

    }
}
console.log(regularUser.fullname.userfullname.firstname)

//combine two object 
const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

//const obj3 = Object.assign({},obj1,obj2); it use to cobine
//another method to combine below

const obj3 = {...obj1,...obj2}
console.log(obj3);

//print the value and key in object

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

//to check the property in object
console.log(tinderUser.hasOwnProperty('islogged'));