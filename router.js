const bodyParser = require('body-parser');
const express = require('express');
const router= express.Router();
const Persons= require('./PersonSchema');

const jsonParser = bodyParser.json();


// router.get('/',(req,res)=>{
//     res.json('Router is working');
// });

router.post('/', jsonParser, async(req,res)=>{
    try{
    console.log(req.body);
    const postPerson= await new Persons({
        Name : req.body.Name,
        Age : req.body.Age
    });
    const savePersons= await postPerson.save();
    res.status(200).json(savePersons);
    // res.status(200).json("Getting Name");
}
catch(err){
    res.json({'err':err})
}
});

router.get('/',async(req,res)=>{
    try{
        const getAll= await Persons.find();
        console.log("getAll"+getAll)
        res.status(200).json(getAll);
    }
    catch(err){
        res.json({'err':err})
    }

});
router.get('/:id',async(req,res)=>{
    try{
        const getById= await Persons.findById(req.params.id);
        res.status(200).json(getById);
    }
    catch(err){
        res.json({'err':err})
    }
});

router.put('/:id',jsonParser,async(req,res)=>{
    try{
        console.log(req.params.id);
        console.log('Body name is ',req.body.Name);
        const updatePersons= await Persons.updateOne({_id:req.params.id},{$set:{Name:req.body.Name,Age:req.body.Age}});
        console.log(updatePersons);
        res.status(200).json(updatePersons);
    }
    catch(err){
        res.json({'err':err})
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const deletePerson= await Persons.remove({_id:req.params.id});
        res.status(200).json(deletePerson);
    }
    catch(err){
        res.json({'err':err})
    }
});


module.exports= router;