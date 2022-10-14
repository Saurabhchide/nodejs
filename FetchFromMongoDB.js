//module-mongoose
const mongoose=require('mongoose');
///Establish Connection
const con=mongoose.connect("mongodb://localhost:27017/Node_JS");

//create Schema Object
const schemaStudent=new mongoose.Schema({
    'studId':Number,
    'studName':String,
    'address':String
})
//define Model
const studentModel=mongoose.model("StudentInfo",schemaStudent);
const fetchFromDB= async()=>
{
    const data=await studentModel.find();
    console.log(data);
}

fetchFromDB();
