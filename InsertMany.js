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

const studentModel=mongoose.model("StudentInfo",schemaStudent);

let details=[
    {
        'studId':2,
        'studName':'ram',
        'address':'pune',
        'percentage':56.78
    },
    {
        'studId':3,
        'studName':'shyam',
        'address':'wadi'
    },
    {
        'studId':4,
        'studName':'suresh',
        'address':'Nagar'
    }
]

const insertInDB=async()=>{
    const result=await studentModel.insertMany(details);
    console.log(result);
}
insertInDB();