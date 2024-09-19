const dbConnect=require('./mongodb');

const updateData=async ()=>{
    let data=await dbConnect();
    let result =await data.updateOne({
        name:'kartick'
    },{
        $set:{age:22, name:'Kartick Pal'}
    })
    console.log(data);
}

updateData();