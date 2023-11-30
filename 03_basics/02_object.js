// when multiple argument passes 
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500))
// above passes multiple argument  to combine it in single array we use (...num1)

function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000))
//above val1 get 200 , val2 get 400 so only 500,2000 print

// below we object passes in function
const user ={
    Username :"shubh",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.Username} and price is ${anyObject.price}`)
}

handleObject(user)

//array pass in function
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));