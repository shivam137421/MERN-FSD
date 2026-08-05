async function api(city) {
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("let, it is a wheather api of "+city);
            resolve("success");
        },2000);
    });  
};

// async function wheather() {
//     await api("gzb");
//     await api("delhi");
    
// }
// let p = wheather();



//IIFE 
// (async function () {
//     await api("gzb");
//     await api("delhi");
// })();
