const bodyParser = require('body-parser');
const express = require('express');
const mongoose= require('mongoose');
const router =require('./router');
const app= express();

const jsonParser = bodyParser.json();

app.listen(2500,()=>{
    console.log("This is new app");
});

app.get('/',(req,res)=>{
    res.json('This is new page of newApp');

});

app.use('/Persons',router);

app.get('/about',(req,res)=>{
    res.json('This is the about page..');
})
mongoose.set('strictQuery',true);
mongoose.connect("mongodb://127.0.0.1:27017/collectionName", (err)=>{
    if(err){
        console.log('DB is not connected', err);
    }
    else {
        console.log("DB is connected");
    }

}
);