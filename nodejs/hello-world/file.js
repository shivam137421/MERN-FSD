const fs = require('fs');

// fs.writeFileSync('./test.txt','hey synchronous');
// fs.writeFile('./test.txt','hey async',(err)=>{});

const result = fs.readFileSync('./contacts.txt','utf-8');
// fs.readFile('./contacts.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log("error : ",err);
//     }
//     else{
//         console.log(result);
//     }
// })
console.log(result);

fs.appendFileSync('./test.txt',"\nhello append");
fs.cpSync('./test.txt','./copy.txt');
// fs.unlinkSync('./copy.txt');
