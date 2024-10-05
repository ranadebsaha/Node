const express=require('express');
const dbConnect=require('./mongodb');
const app=express();

app.use(express.json());

app.get('/',async (req,resp)=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    // console.log(data);
    // resp.send({name:'ranadeb'});
    resp.send(data);
});

app.post('/', async (req,resp)=>{
    // console.log(req.body);
    // resp.send({name:'ranadeb'});
    // resp.send(req.body);
    let data=await dbConnect();
    let result= await data.insertOne(req.body);
    resp.send(result);
});

app.listen(5000);