var mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect(process.env.MONGOLAB_URI ||'mongodb://localhost/TodoApp');

module.exports={mongoose};