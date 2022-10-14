const mongoose = require('mongoose');
//Establish Connecion
const con = mongoose.connect("mongodb://localhost:27017/Node_JS");
console.log(con);

//Create Schema
const bookSchema=mongoose.Schema(
    {
        'bookName':String,
        'autherName':String
    }
)


async function SaveInDB()
{
    //Create Module
    const bookModel=new mongoose.model("BookDetails",bookSchema)
    console.log("Hello",bookModel);
    const data= new bookModule(
        {
            'bookName':'C Programming',
            'autherName':'Ajay Mittal'
        }
    );
    const res= await data.save();
    console.log(res);
}
SaveInDB()