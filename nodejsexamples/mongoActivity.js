var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017";
const dbName = 'trainingdb';


// var employees= [     
//     {empnum:1234, ename: "Mahesh", sal: 2500, role: "ASE", skill:"node"},  
//     {empnum:1234, ename: "Suresh", sal: 4000, role: "analyst", skill:"node"},  
//     {empnum:1234, ename: "Rajesh", sal: 6000, role: "analyst", skill:"node"}, 
//     {empnum:1234, ename: "Girish", sal: 20000, role: "TL", skill:"node"},
//     {empnum:1234, ename: "Harish", sal: 30000, role: "AM", skill:"node"} 
//     ];  


//insertion
// mongoClient.connect(url,function(err,client){
//     if(err)
//     {
//         console.log(err)
//     }
//     else{
//         console.log('connected to Database');
//         const db=client.db(dbName);
//         db.collection('employee')
//         .insertMany(employees,(err, result)=>
//         {
//             if(err) console.log(err);
//             else{console.log('inserted record number : '+result.insertedCount);}
//         })

//         //console.log('document inserted');

//         client.close();
//     }
// })


//update
// mongoClient.connect(url, function (err, client) {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log('connected to Database');
//         const db = client.db(dbName);
//         db.collection('employee')
//             .updateOne({ role: 'TL' }, {$set :{ sal: 5000 }}, (err, res) => {
//                 if (err) console.log(err) ;
//                 else console.log("1 document updated");
//             })

//         //console.log('document inserted');

//         client.close();
//     }
// })

//delete
// mongoClient.connect(url, function (err, client) {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log('connected to Database');
//         const db = client.db(dbName);
//         db.collection('employee')
//             .deleteMany({sal:{$lt :3000}},(err, res) => {
//                 if (err) console.log(err) ;
//                 else console.log(" document deleted :"+res.deletedCount);
//             })

//         //console.log('document inserted');

//         client.close();
//     }
// })

//select
mongoClient.connect(url, function (err, client) {
    if (err) {
        console.log(err)
    }
    else {
        console.log('connected to Database');
        const db = client.db(dbName);
        db.collection('employee')
        .find({sal :{$gt :5000}})
        .toArray((err,result)=>{
            if(err)
            {
                console.log(err);
            }
            else{
                console.log(result);
            }
        })
        //console.log('document inserted');

        client.close();
    }
})