const express= require('express');
const mongoose= require('mongoose');
//const router =require('./router');
//require('dotenv/config');


const app=express();

const PORT= process.env.PORT||3000;

app.use(express.json());

//app.use('/persons',router );
// const persons=[
//     {
//     id:1,
//     name:'priya'
//     },
//     {
//     id:2,
//     name:'Eswar'
//     }
// ]
 app.get('/',(req,res)=>{
     res.send('This is home page');
    
 });

app.post('/',async(req,res)=>{
    persons.push(req.body);
    res.status(200).json(req.body);
    console.log(req.body);
})

app.get('/about',(req,res)=>{
    res.json('This is the about page');
})

app.get('/service',(req,res)=>{
    res.json('This the service page');
})
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/persons", (err)=>{
    if(err){
        console.log('DB is not connected');
    }
    console.log("DB is connected");

}
);