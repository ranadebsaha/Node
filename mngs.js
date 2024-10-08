const mongoose=require('mongoose');

const main=async()=>{
    await mongoose.connect("mongodb://localhost:27017/rds");
    const TestSchema=new mongoose.Schema({
        name:String,
        age:Number
    });

    const TestModel=mongoose.model('test',TestSchema);
    let data = new TestModel({name:'ranadeb saha',age:20});
    let result=await data.save();
    console.log(result);
}

main();