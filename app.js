const { render } = require('ejs');
const express = require('express');
const mongoose= require('mongoose');
const Blog = require('./models/blogSchema');

// express app
const app = express();


const dbURI='mongodb+srv://bloguser:bloguser@blogs.7pyej2u.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser: true,useUnifiedTopology: true})
.then((result)=>app.listen(3500))
.catch((err)=>console.log(err));


//app.listen(5000);

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
//app.use(morgan('dev'));

// app.get('/', (req, res) => {
//   const blogs=[
//     {title:'do your homeworks',snippet:'both reading and math'},
//     {title:'do your arts',snippet:'both reading and math'},
//     {title:'do your sports',snippet:'both reading and math'}
//   ];
//    res.render('index',{ title:'Home',blogs:blogs });
//   });


  app.get('/', (req, res) => {
    res.redirect('/blogs')
    });

  app.get('/add-blog',(req,res)=>{
    const blog= new Blog({ 
      title:'new blog1',
      snippet:'aboutmy new blog1',
      body:'more about my new blog1'
    });
    blog.save()
    .then((result)=>{
      res.send(result)
    })
    .catch((err)=>{
      console.log(err);
    });

  })



  app.get('/all-blogs',(req,res)=>{
    Blog.find()
    .then((result)=>{
      res.send(result);
    })
    .catch((err)=>{
      console.log(err);
    });
  })

  app.get('/single-blog',(req,res)=>{
    Blog.findById('63bd806f6c696047730914b9')
    .then((result)=>{
      res.send(result)
    })
    .catch((err)=>{
      console.log(err);
    })
  })
  
  app.get('/about',(req,res)=>{
    res.render('about',{ title:'About' });
  })

  app.get('/blogs/create',(req,res)=>{
    res.render('create',{ title:'Create a new blog' })
  })

  //blog routes
  app.get('/blogs',(req,res)=>{
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

  app.get('/blogs/:id',(req,res)=>{
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

  app.delete('/blogs/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
      .then((result)=>{
        res.json({redirect:'/blogs'});
      })
       .catch((err)=>{console.log(err)});
      })


  app.post('/blogs',(req,res)=>{
    const blog= new Blog(req.body);
      blog.save()
        .then((result)=>{
          res.redirect('/blogs');
        })
        .catch((err)=>{
          console.log(err);
        })
  })
  app.use((req, res) => {
    res.status(404).render('404',{ title:'404' });
  });
  