//singleton
//object.create

//object literals
const mySym = Symbol("key1")

const JsUser = {

    name : "shubham",
    age : 21,
    location:"Lhasurne",
    mySym : "mykey1",
    email:"shubham@google.com",
    isLoggedIn: false,
    lastLoginDays : ["monday" , "saturday"]
}
console.log(JsUser.email)

//another method to print
console.log(JsUser["email"]);
console.log(JsUser["name"]);
console.log(JsUser.mySym);

JsUser.email ="shubhamghadge784@gmail.com";
console.log(JsUser.email)

//below we freeze the object 
//Object.freeze(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())
