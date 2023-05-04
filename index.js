const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/test");
const personSchema = new mongoose.Schema({
    name:String,
    age:Number
});
const Person = mongoose.model("person",personSchema);
Person.find(function(err, callback){
    if(err){
        console.log(err);
    }
    else{
        mongoose.connection.close();
        console.log(callback);
    }
})