//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if (err){
	return console.log('unable to connect to mongodb server');

}
console.log("connected to mongodb server");

// db.collection('Todos').find({
// 	_id:new ObjectID('5af977b5f341261a0cdb2870')}).toArray().then((docs)=>{
// console.log('Todos');
// console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
// 	console.log('unable to fetch Todos',err);
// });

// db.collection('Todos').find().count().then((count)=>{
// console.log(`Todos count: ${count}`);

// },(err)=>{
// 	console.log('unable to fetch Todos',err);
// });

db.collection('Users').find({name:'gen'
}).toArray().then((docs)=>{
	console.log('Users');
console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
console.log('unable to fetch Users',err);
});

 //db.close();
 });