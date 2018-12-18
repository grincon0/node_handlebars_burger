const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

//when index route is get

router.get('/', (req, res)=>{
    res.redirect('/burger')

})
router.get('/burger', (req, res) => {
    //calls the allBurg method
    burger.allBurg()
    //by the calling the allBurg method, we are getting all the data from every row in the burger table
        .then((response) => {
            // the response will be the object that has the table data
            //we will tell hnadlebars to pass this data over to the burgers hb variable
            //this line of code is key. With this, the HB engine will search the index.handlebars file for the temp var of Burgers
            //and will pass that data to it.
            //thus rendering it on the DOM
            console.log(response);
        res.render('index', { burgers: response });
            

        })
        .catch((err) => {
            console.log(err);
        });

});

router.post('/burger/create', (req,res)=>{
    burger.createBurg(req.body.burger_name)
    .then((resp)=>{

        console.log(resp);
        res.redirect('/');
    })
    .catch((err)=>{
        console.log(err);
    })
});

router.put('/burger/:isEaten', (req, res)=>{
    burger.updateBurg(req.params.isEaten, req.body.devour)
    res.sendStatus(200);
});


module.exports = router;