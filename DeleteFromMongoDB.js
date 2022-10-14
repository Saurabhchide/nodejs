const mongoose=require('mongoose');
//Establish Connection
const con=mongoose.connect("mongodb://localhost:27017/Node_JS");
const schemaStudent=new mongoose.Schema({
    'studId':Number,
    'studName':String,
    'address':String
})

const studentModel=new mongoose.Schema("studentInfo",schemaStudent);

const deleteFromDB=async ()=>{
    const data= await studentModel.deleteOne({
        'studName':'Amit'
    });
    console.log(data);
}

deleteFromDB();