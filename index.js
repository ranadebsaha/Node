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
// const dirPath =path.join(__dirname,'files');
// for(i=0;i<5;i++){
//     fs.writeFileSync(`${dirPath}/rds${i}.txt`,`This is Ranadeb File ${i}`);
// }

// fs.readdir(dirPath,(err,file)=>{
//     // console.log(file);
//     file.forEach((f)=>{
//         console.log(f);
//     });
// });

//CRUD 
const dirPath =path.join(__dirname,'crud');
const fpath=`${dirPath}/ranadeb.txt`;

// fs.writeFileSync(fpath,"This is Ranadeb");
// fs.readFile(fpath,'utf8',(err,item)=>{
//     console.log(item);
// })
// fs.appendFile(fpath,"And ranadeb node sikhche",(err)=>{
//     if(!err){
//         console.log('File updated');
//     }
// });
// fs.rename(fpath,`${dirPath}/rds.txt`,(err)=>{
//     if(!err){
//         console.log('renamed');
//     }
// })
// fs.unlinkSync(`${dirPath}/rds.txt`)

// let a=20;
// let b=0;

// let newb=new Promise((res,rej)=>{
//     setTimeout(()=>{
//     res(30);
//     },2000);
// }).then((data)=>{
//     b=data;
//     console.log(a+b);
// });

// node js---->>>  function -> call stack -> node apis -> callback queue

// const express=require('express');
// const app= express();

// app.get('',(req,res)=>{
//     console.log('This is ',req.query);
//     res.send('This is home page '+req.query.name);
// });

// app.get('/about',(req,res)=>{
//     res.send('This is about page');
// });
// app.get('/main',(req,res)=>{
//     res.send(`
//         <input type="text" value=${req.query.name} disabled>
//         `);
// });

const express=require('express');
// const path=require('path');

const app= express();
const publicpath=path.join(__dirname,'public');

console.log(publicpath);
app.use(express.static(publicpath));
app.listen(5000);