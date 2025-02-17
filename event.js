const express=require('express');
const EventEmitter=require('events');
const app=express();
const event=new EventEmitter();
let count=0;

event.on("api",()=>{
    count++;
    console.log("Event called",count);
})

app.get("/",(req,resp)=>{
    resp.send("api called");
    event.emit("api");
});

app.get("/search",(req,resp)=>{
    resp.send("api called");
    event.emit("api");
});

app.get("/update",(req,resp)=>{
    resp.send("api called");
    event.emit("api");
});

app.listen(5000);