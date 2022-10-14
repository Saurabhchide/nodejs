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

const studentModel=mongoose.model("studentInfo",schemaStudent);
const updateInDB=async()=>
{
    const result=await studentModel.updateOne(
        //condition
        {'studName':'Amit'},
        //Update Data
        {$set:{
                'address':'nashik'
            }
        }
    );
    console.log(result);
    if(result.acknowledged){
        console.log("updated");
    }
}

updateInDB()