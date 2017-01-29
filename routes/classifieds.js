
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex')

// YOUR CODE HERE

//get all
router.get('/', (req, res, next) =>{
  knex('classifieds')
     .select('id', 'title', 'description', 'price', 'item_image')
     .then((results)=>{
       res.send(results);
     })
     .catch((err)=>{
       next(err);
     });
});

//get by id
router.get('/:id', (req, res, next) =>{
  knex('classifieds')
     .select('id', 'title', 'description', 'price', 'item_image')
     .where('id', req.params.id)
     .then((results)=>{
       res.send(results[0]);
     })
     .catch((err)=>{
       next(err);
     });
});

//post

//update

//delete

module.exports = router;
