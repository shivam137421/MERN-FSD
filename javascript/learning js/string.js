//template literals

let obj={
    item : "pen",
    price : 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

//escape character

console.log("hello\nnext line");

let str="hello\ttab";
console.log(str);
console.log(str.length);  //escape character length count only one (\t) its length count as only 1 not 2


let str1 =  "shivam"
console.log(str1);
let str2 = str1.toUpperCase();
console.log(str2);
