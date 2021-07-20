var mongodb=require('mongodb');
var mongoClient=mongodb.MongoClient;
const url="mongodb://localhost:27017";
const dbName='trainingdb';

mongoClient.connect(url,function(err,client){
    if(err)
    {
        console.log(err)
    }
    else{
        console.log('connected to Database');
        const db=client.db(dbName);
        db.collection('student')
        .find({age :{$gt :24}})
        .toArray((err,result)=>{
            if(err)
            {
                console.log(err);
            }
            else{
                console.log(result);
            }
        })
            
        console.log('document inserted');
        
        client.close();
    }
})