const express= require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const uuid = require('uuid');
const { get } = require('http');
const app= express();

const PORT = process.env.PORT||2500;

app.use(express.json());

app.listen(2500,()=>{
    console.log(`server start at ${PORT}`)
});

// app.use((req,res,next)=>{
//     console.log("I am a middleware");
//     next();
// });

const customers = 
[
    {
        id:1,
        name:'Wsdljs',
        age:12
    },
    {
        id:2,
        name:'Wsjs',
        age:34
    },
    {
        id:3,
        name:'Wsds',
        age:76
    },
]

app.use(morgan('dev'));

app.get("/",(req,res)=>{
    res.json(customers)
})

app.get("/about",(req,res)=>{
    res.json("This is the about page");
})

app.get("/service",(req,res)=>{
    res.json("This is the service page")
})

// app.get('/:id',async(req,res)=>{
//    const getOne= customers.filter(e=>e.id===Number(req.params.id))
//    console.log(getOne);
//    res.status(200).json(getOne);
// });


// app.post('/',async(req,res)=>{
//     console.log(req.body);
//     //res.json(req.body);
//     persons.pop(req.body);
// })
// if(req.url==='/'){
//     fs.readFile(path.join(`${__dirname}/views/home.html`),'utf8',(err,data)=>{
//         if(err){throw err}
//         res.end(data);
//     });
mongoose.set('strictQuery',true);
    
// mongoose.connect('mongodb://localhost:27017/person',(err)=>{
//     if(err){
//         console.log("DB is not connected", err);
//     }else{
//     console.log("DB connected successfully");
//     }
// })
  