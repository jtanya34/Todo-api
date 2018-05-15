//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if (err){
	return console.log('unable to connect to mongodb server');

}
console.log("connected to mongodb server");

db.collection('Users').findOneAndUpdate({_id: new ObjectID("5af979f0b4cd2e218ceb7539")},{
	
	$set:{name:"aryu"},
	$inc:{age:5}	

},{
	returnOriginal:false
}).then((result)=>{
console.log(result); 
});


 //db.close();
 });