// Immediately Invoked Function Expressions (IIFE)
//iife means when we add function in () then it run immediately and not require to give function name during functio call
(function chai(){
    console.log(`Connected`);
})
 ();

 ((name) =>{
    console.log(`DB CONNECTED TWO ${name}`)
 })('shubh');