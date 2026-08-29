console.log("hey")

//node js does not have dom manipulation and window objects

//we can initiate a package using npm init ,
//it generates a package.json , which is a configuration of this project , we can install or can change external , internal dependencies  in this .json file

//to create package.json at specific folder , first come to that folder in terminal then run npm init
//we can add our own script in package.json file by separting scripts by a single use of comma symbol(,)


const math = require('./math');
const {sub1,add1}=require('./math');

console.log(add1,sub1);
console.log(typeof(add1));

console.log(math.add1(2,6));
console.log(sub1(2,6));