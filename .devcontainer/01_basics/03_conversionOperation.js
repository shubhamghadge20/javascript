let score ="22";
 console.log(typeof score);

 //here we convert string into number
 let valueInNumber = Number(score);
 console.log(typeof valueInNumber);

 //"33" =>33
 //"33abc" => NaN not a number
 //true=>1 ; false=>0

 let isLoggedIn =1;
 let booleanisLoggedIn =Boolean(isLoggedIn);
 console.log(typeof booleanisLoggedIn);

 //1=>true; 0=>false
 //""=>false
 //"shubh"=>true

 let someNumber =33;
 let stringnum = String(someNumber);
 console.log(typeof stringnum);

  //****Operation*****//
  let str1 = "hello";
  let str2 = "shubham";
  let str3 = (str1 + str2);
  console.log(str3);

  console.log("1"+2);
  console.log(1 + "2");
  console.log(1 +2 +"3");

  let gameCounter =100;
  ++gameCounter;
  console.log(gameCounter);