const http = require('http');
const data = require('./data');
// const app=require('./app');
const fs=require('fs');
// console.log(app.rds())
const arr=[10,20,40,50,'40'];
// arr.filter((i)=>{
//     console.log(i)
// })
// var res=arr.filter((i)=>{
//     if(i===40){
//         console.log("boom");
//     }else{
//         console.log("boom boom");
//     }
// })
// var res=arr.filter((i)=>{
//     return i===40;
// })
// console.log(res);

// fs.writeFileSync("rds.txt","This is Ranadeb");
// console.log(__filename);


// http.createServer((req,res)=>{
//     res.write("<h1>This is Ranadeb</h1>");
//     res.end();
// }).listen(5000);

// console.log('Ranadeb Saha');

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'application\json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(5000);

// console.log(process.argv[2]);
// const name=process.argv;
// fs.writeFileSync('name[2],name[3]');
// fs.unlinkSync(name[2]);

const path =require('path');
const dirPath =path.join(__dirname,'files');
// for(i=0;i<5;i++){
//     fs.writeFileSync(`${dirPath}/rds${i}.txt`,`This is Ranadeb File ${i}`);
// }

fs.readdir(dirPath,(err,file)=>{
    // console.log(file);
    file.forEach((f)=>{
        console.log(f);
    });
});