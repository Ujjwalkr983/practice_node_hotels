const express = require('express');
const router = express.Router();
const Person = require('./../models/person')

router.post('/', async (req, res)=>{
    try{
        const data = req.body;
        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);
    }
    catch(err){
        console.log("error");
        res.status(500).json({error: 'internal server error'});
    }
});


router.get('/', async (req, res)=>{
    try{
        const data = await Person.find();
        console.log('data fatched');
        res.status(200).json(data);
    }catch(err){
        console.log("error");
        res.status(500).json({error: 'internal server error'});
    }
});

router.get('/:workType', async (req, res) => {

    try{
        const workType = req.params.workType;
        if(workType == 'chef'|| workType == 'manager' || workType == 'waiter'){
            const response = await Person.find({work: workType});
            console.log('response fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error: 'Invalid work type'});
        }
    }catch(err){
        console.log(err);
        res.status(404).json({error: 'Invalid work type'});
    }
});

router.put('/:id', async (req, res)=>{
    try{
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidaters: true,
        });

        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log('response updated');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(404).json({error: 'Invalid work type'});
    }
});

module.exports = router;