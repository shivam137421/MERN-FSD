// function getdata(dataid , getnext){
//     setTimeout(()=>{
//         console.log("data",dataid);
//         if(getnext){
//             getnext();
//         }
//     },6000);
// }
// getdata(2,()=>{
//     getdata(3);
// });




// let promise =new Promise((resolve, reject) => {
//     console.log("i am promise");
//     // resolve("success");
//     reject("promise is rejected & this is a msg");
// })




// //let this function returns a function like api provides data
// function getdata(dataid , getnext){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataid);
//             if(getnext){
//                 getnext();
//             }
//             resolve("function return data properly");
//             // reject("function is working but rejected");
//         },2000);
//     });
// }
// let result = getdata("hello java",null);



// //actions we perform after promise fulldilled or rejected
// const getpromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("i am a promise after pending");
//         // resolve("success");
//         reject("promises fullfilled and rejected");
//     });
// }

// let promise = getpromise();

// promise.then((res)=>{
//     console.log("then action performed, resolve result = ",res);
// })

// promise.catch((err)=>{
//     console.log("cathch action performed, rejected result = ",err);
// })




//promise chaining ex-1
// function async1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         },4000);

//     })
// }
// function async2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         },4000);

//     })
// }
// console.log("fetching data 1 .......");
// let p1=async1();
// p1.then((res)=>{
//     console.log("fetching data 2.....");
//     async2().then((res)=>{
//         console.log(res);
//     })
// })


//promise chaining ex-2
function getdata(dataid){
    return new Promise((resolve,reject)=>{
        console.log("processing data"+dataid+"........");
        setTimeout(()=>{
            console.log("data",dataid);
            resolve("success");
        },2000);
    })
}
console
getdata(1).then((res)=>{
    return getdata(2);
}).then((res)=>{
    return getdata(3);
}).then((res)=>{
    console.log(res);
})

