const http = require('http');
const path= require('path');
const fs= require('fs');
 
fs.mkdir('newFolder',(err)=>{
    if(err)throw err;
})

const app = http.createServer((req,res)=>
{
    if(req.url==='/'){
        fs.readFile(path.join(`${__dirname}/views/home.html`),'utf8',(err,data)=>{
            if(err){throw err}
            res.end(data);
        });
        
    }
    if(req.url==='/about'){
        fs.readFile(path.join(`${__dirname}/views/aboutMe.html`),'utf8',(err,data)=>{
            if(err){throw err}
            res.end(data);
        });  
    }

    if(req.url ==='/service'){
        const x=[{id:1,name:"priya"}]
        res.end(JSON.stringify(x));
    }
});


const PORT= process.env.PORT||2000;

app.listen(2000,()=>{
    console.log(`Server started at ${PORT}`);
})