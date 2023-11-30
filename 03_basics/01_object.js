//basic function
function sayMyName(){
    console.log("s");
    console.log("h");
    console.log("u");
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("m");
}
//below we call the function
// sayMyName();

//(number1, number2) it is call parameter i
// function addTwoNumbers(number1, number2){
//     console.log(number1 +number2)  
           
// }

function addTwoNumbers(number1, number2){
    let result =(number1 +number2) 
    return result; 
           
}
 const  result =addTwoNumbers(3,4);  //it is call argument

 console.log("Result :", result);
 
 function loginUserMessage(username){
    if(!username){
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("shubham"));

 