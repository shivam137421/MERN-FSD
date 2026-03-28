// alert("hello");
// prompt("enter your name");
console.log("hello");

//let const var
var a = 6;
let b = 7;
const c = 9;
b = 12; // let b=7 not allowed
var a = 73; //let a=73 not allowed
// c=83; not allowed

console.log(a);
console.log(b);
console.log(c);

//data types

var a = 63;
fullname = "shivam";
isfollow = true;
let x = 2;
y = null;
let g = BigInt(74);
var j = Symbol("hello!");
console.log(typeof j);

//object

const student={
    fullname:"shivam",
    age:21,
};
console.log(student.age);
student.fullname="stab";
console.log(student.fullname);
student.age=57;
console.log(student.age);

const profile={
    username:"shivam",
    followers:459,
    isfollow:true,

};

for(let i in profile){
    console.log(typeof(i));
    console.log(i , ":" , profile[i]);
}