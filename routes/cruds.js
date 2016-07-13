'use strict';

const express = require('express');

const Crud = require('../models/crud');

let router = express.Router();

// cruds.js
// /api/cruds

router.get('/', (req, res)=>{
  Crud.find({}, (err, cruds)=>{
    res.status(err ? 400 : 200).send(err || cruds);
  })
})

router.post('/', (req, res)=>{
  Crud.create(req.body, (err, crud)=>{
    res.status(err ? 400 : 200).send(err || crud);
  })
})

router.route('/:id')
 .get((req, res) =>{
  Crud.findById(req.params.id, (err, crud) =>{
     res.status(err ? 400 : 200).send(err || crud);
    });
  })
  .put((req, res) =>{
  Crud.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, crud) =>{
     res.status(err ? 400 : 200).send(err || crud);
    });
  })
  .delete((req, res) =>{
  Crud.findByIdAndRemove(req.params.id, err =>{
     res.status(err ? 400 : 200).send(err);
  });
});

module.exports = router;
