const mongoose=require('mongoose');
//Establish Connection
const con=mongoose.connect("mongodb://localhost:27017/Node_JS");
console.log(con); //promise { <pending> }
//create schema for collection documents
const schemaStudent=new mongoose.Schema({
    'studId':Number,
    'studName':String,
    'address':String
})

const insertInDB=async ()=>{
    //create model
    const studentModel=mongoose.model("StudentInfo",schemaStudent);
    //create model Object
    const info=new studentModel({
        'studId':1,
        'studName':'Amit',
        'address':'pune'
    }
    );
    const result=await info.save();
    console.log(result); 
}

insertInDB();