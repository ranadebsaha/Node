const express=require('express');
require('./config');
const test = require('./test');

const app=express();

app.use(express.json());

app.post('/create',async (req,resp)=>{
    let data=new test(req.body);
    let result=await data.save();
    console.log(result);
    resp.send(result);
});

app.listen(5000);