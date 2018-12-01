var express = require('express');
var router = express.Router(),
PostController = require('../controllers/PostController');

//create
router.post('/',PostController.create);
//get
router.get('/',PostController.getAll);
router.get('/:id',PostController.get);

//update
router.put('/:id',PostController.update);
//delete
router.delete('/:id',PostController.delete);

module.exports=router;