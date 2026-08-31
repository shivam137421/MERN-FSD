const http = require("http");
const  fs = require("fs");
const url = require('url');

// const myserver = http.createServer((req,res)=>{
//     console.log(req.url);
//     res.end("server responded");
// })

const myserver = http.createServer((req,res)=>{
    if(req.url === '/favicon.ico'){
        return res.end();
    }
    // console.log(req);
    const log = `${Date.now()}: ${req.method} ${req.url} new request recieved\n`;
    const myurl = url.parse(req.url,true);
    console.log(myurl);
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(myurl.pathname){
            case "/":
                if(req.method==='GET'){
                    res.end("homepage");
                } 
                break;
            case "/about":
                res.end(`hii ${myurl.query.myname}`);
                break;
            case "/signup":
                if(req.method==='GET'){
                    res.end("this is a signup form");
                }
                else if(req.method==='POST'){
                    res.end("submitted successfully");
                }
                break;    
            default: res.end("404 not found");
        }
    })
})

myserver.listen(8000,()=>{
    console.log("server started");
})
