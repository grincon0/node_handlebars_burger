const express = require('express');
const burger = require('../models/burg');

const router = express.Router();

router.get('/', (req, res) => {
    burger.allBurg()
        .then((res) => {
            res.render('index', { burgers: res });

        })
        .catch((err) => {
            console.log(err);
        });

});

router.post('/', (req,res)=>{
    burger.createBurg(req.body.burgerName)
    .then((res)=>{

        console.log(res);
        res.redirect('/');
    })
    .catch((err)=>{
        console.log(err);
    })
});

router.put('/:devoured', (req,res)=>{
    burger.updateBurg(req.params.devoured, req.body.devour)
    .then((res)=>{
        console.log(res);
        res.status(200).end();
    })
    .catch((err)=>{
        console.log(err);
        })
})

module.exports = router;