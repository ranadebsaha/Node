// const http = require('http');
// const data = require('./data');
// const app=require('./app');
// const fs=require('fs');
// console.log(app.rds())
// const arr=[10,20,40,50,'40'];
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

// const path =require('path');
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
// const dirPath =path.join(__dirname,'crud');
// const fpath=`${dirPath}/ranadeb.txt`;

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

// const express=require('express');
// const path=require('path');

// const app= express();
// const publicpath=path.join(__dirname,'public');

// app.set('view engine','ejs');
// console.log(publicpath);
// app.use(express.static(publicpath));
// app.get('',(req,res)=>{
//     res.sendFile(`${publicpath}/index.html`);
// });
// app.get('/about',(req,res)=>{
//     res.sendFile(`${publicpath}/about.html`);
// });
// app.get('/profile',(req,res)=>{
//     const user={
//         name:'Ranadeb',
//         email:'rds@gmail.com',
//         city:'katwa',
//         skills:['c','php','python','node']
//     }
//     res.render('profile',{user});
// });

// app.get('/login',(req,res)=>{
//     res.render('login');
// });

// app.get('*',(req,res)=>{
//     res.sendFile(`${publicpath}/404.html`);
// });

// app.listen(5000);

//------------middleware-----------
// const express=require('express');
// const reqFilter=require('./middleware');
// const app=express();

// const route=express.Router(); //group route middleware

// const reqFilter=(req,res,next)=>{
//     // console.log('reqFilter');
//     if(!req.query.age){
//         res.send('Enter a Age');
//     }
//     else if(req.query.age<18){
//         res.send('You are under 18. You can not access this page');
//     }
//     else{
//         next();
//     }
// };

// app.use(reqFilter); //Application level middleware
// app.get('/user',reqFilter,(req,res)=>{ //Route level middleware
//     res.send('User Page')
// });

//Group Route Middleware
// route.use(reqFilter);

// app.get('',(req,res)=>{
//     res.send('Home page');
// });


// route.get('/user',(req,res)=>{
//     res.send('User page');
// });

// route.get('/about',(req,res)=>{
//     res.send('About page');
// });

// app.use('/',route);

// app.listen(5000);

//----------------Mongodb------------------
// const {MongoClient} = require('mongodb');
// const url='mongodb://localhost:27017';
// const database='rds';
// const client=new MongoClient(url);

// async function dbConnect(){
//     let result = await client.connect();
//     let db=result.db(database);
//     return db.collection('test');
//     // let res= await collection.find().toArray();
//     // console.log(res);
// }

// console.log(dbConnect());
// dbConnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data);
//     });
// });

// const main= async ()=>{
//     let data=await dbConnect();
//     data= await data.find().toArray();
//     console.log(data);
// }

// main();

const dbConnect=require('./mongodb');

// const main= async ()=>{
//     let data=await dbConnect();
//     data= await data.find().toArray();
//     console.log(data);
// }

// main();

