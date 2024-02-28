function one(){
    const username ="shubham"

    function two(){
        const website ="youtube"
        console.log(username);
    }

    //console.log(website);
    //here we can not access website because it is limited for two() scope
    two();
}
one();
//---------hoisting-------

console.log(add(2));
function add(num){
    return num+1;
 }

 //below we perform hoisting  means we add function two variable 
 add(4)
 addtwo = function(num){
    return num+2;
 }