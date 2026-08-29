const http = require("http");
const  fs = require("fs");
const url = require('url');

const myserver = http.createServer((req,res)=>{
    if(req.url === '/favicon.ico'){
        return res.end();
    }
    const log = `${Date.now()}:${req.url} new request recieved\n`;
    const myurl = url.parse(req.url,true);
    console.log(myurl);
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(myurl.pathname){
            case "/": 
            res.end("homepage");
            break;
            case "/about":
                 res.end(`hii ${myurl.query.myname}`);
            break;
            default: res.end("404 not found");
        }
    })
})

myserver.listen(8000,()=>{
    console.log("server started");
})
