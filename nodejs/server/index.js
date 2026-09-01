// const http = require("http");
// const  fs = require("fs");
// const url = require('url');


// const myserver = http.createServer((req,res)=>{
//     console.log(req.url);
//     res.end("server responded");
// })

// function myhandeler(req,res){
//     if(req.url === '/favicon.ico'){
//         return res.end();
//     }
//     // console.log(req);
//     const log = `${Date.now()}: ${req.method} ${req.url} new request recieved\n`;
//     const myurl = url.parse(req.url,true);
//     console.log(myurl);
//     fs.appendFile('log.txt',log,(err,data)=>{
//         switch(myurl.pathname){
//             case "/":
//                 if(req.method==='GET'){
//                     res.end("homepage");
//                 } 
//                 break;
//             case "/about":
//                 res.end(`hii ${myurl.query.myname}`);
//                 break;
//             case "/signup":
//                 if(req.method==='GET'){
//                     res.end("this is a signup form");
//                 }
//                 else if(req.method==='POST'){
//                     res.end("submitted successfully");
//                 }
//                 break;    
//             default: res.end("404 not found");
//         }
//     })
// }
// const myserver = http.createServer(myhandeler);

// myserver.listen(8000,()=>{
//     console.log("server started");
// })

//same work using express framework , which has not need to require HTTP or URL
const express = require('express');
const app = express();
app.get("/about",(req,res)=>{
    res.send(`hii ${req.query.name} your age is ${req.query.age} and you are on ${req.path}`);
})

app.get("/",(req,res)=>{
    res.send(`hii ${req.query.name} your age is ${req.query.age} and you are on ${req.path}`);
})

app.get("/signup",(req,res)=>{
    res.send(`you are on signup page and requested ${req.method} method`);
})

app.post("/signup",(req,res)=>{
    res.send(`you are on signup page and requested ${req.method} method`);
})

const port =8000;
app.listen(8000,()=>{
    console.log(`you are live on ${port}`);
})
