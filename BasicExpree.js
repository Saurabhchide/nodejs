const express=require('express');
// const ex=express();
// ex.get('/',function(request,response){
//     response.write("Welcome Kshitij to Express JS");
//     response.end();
// }).listen(2000);

const ex=express();
ex.get('/topic',function(request,response){
    response.write("Welcome to Express JS");
    response.end();
})

ex.post('/about',function(request,response){
    response.write("About page ");
    response.end();
})

ex.delete('/login',function(request,response){
    response.write("page login kar na ");
    response.end();
});

//post-insert put-update
ex.put('/register',function(request,response){
    response.write("page register kar ");
    response.end();
})    
ex.listen(2000);

