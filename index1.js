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

app.get("/list",async (req,resp)=>{
    let data= await test.find();
    resp.send(data);
});

app.delete("/delete/:_id",async (req,resp)=>{
    console.log(req.params);
    let data=await test.deleteOne(req.params);
    resp.send(data);
});

app.put("/update/:_id",async (req,resp)=>{
    console.log(req.params);
    let data=await test.updateOne(
        req.params,
        {
            $set:req.body
        }
);
    resp.send(data);
});

app.get("/search/:key",async (req,resp)=>{
    console.log(req.params.key);
    let data= await test.find({
        "$or":[
            {"name":{$regex:req.params.key}},
            {"city":{$regex:req.params.key}}
        ]
    });
    resp.send(data);
});

app.listen(5000);