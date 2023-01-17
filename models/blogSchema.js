const mongoose= require('mongoose');
const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{  
    type:String,
    required:true
},
    CreatedTime:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('Blog',blogSchema);