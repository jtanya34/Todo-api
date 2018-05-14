//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if (err){
	return console.log('unable to connect to mongodb server');

}
console.log("connected to mongodb server");


//delete many
db.collection("Users").deleteMany({name:"mike"}).then((result)=>{
	console.log(result);
})


//deleteOne
// db.collection("Todos").deleteOne({text:"eat lunch"}).then((result)=>{
// 	console.log(result);
// })

//findoneanddelete
// db.collection("Todos").findOneAndDelete({cpmpleted:false}).then((result)=>{
// 	console.log(result);
// })
 //db.close();
 });