const bodyParser = require('body-parser');
const express = require('express');
const router= express.Router();
const Persons= require('./models/blogSchema');

const jsonParser = bodyParser.json();

router.post('/', jsonParser, async(req,res)=>{
    try{
    console.log(req.body);
    const postBlog= await new Persons({
        Title : req.body.Title,
        Snippet : req.body.Snippet,
        Body : req.body.Body
    });
    const saveBlog= await postBlog.save();
    res.status(200).json(saveBlog);
    // res.status(200).json("Getting Name");
}
catch(err){
    res.json({'err':err})
}
});
