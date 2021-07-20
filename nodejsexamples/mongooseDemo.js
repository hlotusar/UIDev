var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/trainingdb',function(err){
    if(err) console.log(err);
    else console.log('connected');
})

var userSchema=mongoose.Schema({
    name:String,
    age:Number,
    location:Array
},{collection:'userInfo'});

var User=mongoose.model('user',userSchema);
var user2=new User({name:'ramesh',age:21,location:['bdc','cdc']});


//user2.save();

// user2.save(function(err){

//     if(err) console.log(err)

//     else{

//         console.log('Document Inserted')

//     }

// })

User.find({},function(err,users){
    if(err) console.log(err);
    else console.log(users)
})

// User.find({name:'sumit'},function(err,users){
//     if(err) console.log(err);
//     else console.log(users)
// })

// User.findOneAndUpdate({name:'sumit'},{age:24},(err,user)=>{
//     if(err) console.log(err);
//     else console.log(user);
// })

// User.findOneAndRemove({name:'sumit1'},(err,user)=>{
//     if(err) console.log(err);
//     else {console.log(user);
//     console.log('successful');}
    
// })
mongoose.connection.close();
