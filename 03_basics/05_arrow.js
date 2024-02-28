// this keyword use to refers an object or current context
const user={
    username:"shubh",
    price:"89",

    welcomeMessage: function(){
        console.log(`${this.username},welocome to website`);
    }
}

user.welcomeMessage();
user.username="sam"
user.welcomeMessage();

//below we cannot use this keyword in function
 const chai =function (){
    let username="rahul"
    console.log(this.username)
}
chai();

///-------arrow function-----
//in arrow function we can not access arrow function 
const first = () =>{
    let username="rahul"
    console.log(this.username)
}
first();

const addtwo =(num1,num2) =>{
  return num1+num2;
}

console.log(addtwo(2,3));

//another way to write arrow function
const add =(num1,num2)=> (num1+num2);
console.log(add(6,6));

//for must written in {}
const name =() =>({username:"yash"});


