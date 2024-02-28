//var a is gloabal scope  global scope can access any where
var a =20;

{//b,c,d are block scope

    //means we in block scope we can access b,c,d only in scope ({} -scope) 
  let  b=12;
  let  c =23;
  let  d=11;
}
console.log(d);