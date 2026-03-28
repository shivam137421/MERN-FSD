function sum(x,y){
    console.log(x+y);
}
sum("hello","jav");

//arrow function 

const arrowmul = (a,b)=>{
    console.log(a*b);
}

//function to return no.  of vowels

function count_vowel(a){
    let b=a.toLowerCase();
    let count=0;
    for(let x of b){

        // if(x=='a' || x=='e' || x=='i' || x=='o' || x=='u' ){
        //     count++;
        // }
        if("aeiou".includes(x)){
            count++;
        }
    }
    return count;
}

let result = count_vowel("jarvis");
console.log(result);


//arrow function to count vowels in strimg

arrowcount = (str)=>{
    let count =0;
    let strlower = str.toLowerCase();
    for(let x of strlower){
        if("aeiou".includes(x)){
            count++;
        }
    }
    return count;


}

//for each loop in arrays
//callback function
//higher order function

let arr =["jarvis" , "man" , "abc"];
arr.forEach((val,idx,arr)=>{
    console.log(val,idx,arr);
});





//some more usefull array methods
let arr2=[1,2,3,4,5,6,7,8]

//map
let newarr = arr2.map((val)=>{
    return val;
})


//filter
let newarr2=arr2.filter((val)=>{
    if(val%2==0){
        return val;
    }
})

//reduce
let initialval=0;
let sum1=arr2.reduce((sum1,val)=>{
    return sum1+val;

    // return sum1>val ? sum1:val;
}, initialval);

let greater=arr2.reduce((curr,prev)=>{
    return curr>prev ? curr:prev;
})
 


