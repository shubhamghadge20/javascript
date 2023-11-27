const marvel_hero =["Thor","Ironman","spiderman"]

const dc_hero =["flash", "Batman","superman"]

marvel_hero.push(dc_hero);

// marvel_hero.concat(dc_hero);
// console.log(marvel_hero);

// const all_hero = {...marvel_hero,...dc_hero}
// console.log(all_hero);

console.log(Array.isArray("shubham"));
console.log(Array.from("shubham"));

let score =100;
let score1 =200;
let score2 =300;
console.log(Array.of(score,score1,score2));