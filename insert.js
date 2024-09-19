const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertMany(
        [{
            name: 'kartick',
            age: '20',
            city: 'khajurdihi'
        },
        {
            name: 'abir',
            age: '20',
            city: 'dainhat'
        },
        {
            name: 'babin',
            age: '20',
            city: 'bandel'
        }]
    );
    if(result.acknowledged){
        console.log("Data Inserted");
    }
    
}

insert();