const express = require('express');
const Blog = require('../models/blogSchema');

const router = express.Router();


  router.get('/blogs/create',(req,res)=>{
    res.render('create',{ title:'Create a new blog' })
  })

  //blog routes
  router.get('/blogs',(req,res)=>{
    Blog.find()
    .then((result)=>{
      //console.log(result.length);
      //console.log(result);
      res.render('index',{title:'All Blogs Test',blogs:result})
    })
    .catch((err)=>{
      console.log(err);
    })
  });

  router.get('/blogs/:id',(req,res)=>{
    const id = req.params.id;
    console.log("id is=============>"+id);
    Blog.findById(id)
      .then((result) =>{
        console.log(result);
        res.render('details',{blog:result,title:'Blog Details'});
      })
      .catch((err)=> {
        console.log(err);
      });
  })

  router.delete('/blogs/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
      .then((result)=>{
        res.json({redirect:'/blogs'});
      })
       .catch((err)=>{console.log(err)});
      })


  router.post('/blogs',(req,res)=>{
    const blog= new Blog(req.body);
      blog.save()
        .then((result)=>{
          res.redirect('/blogs');
        })
        .catch((err)=>{
          console.log(err);
        })
  })

  module.exports = router;