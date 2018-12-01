const mongoose = require('mongoose'),
postModel = require('../models/Post');

PostController ={};

PostController.create = function(req,res){
    //obteniendo los datos
    let data={
        materia:req.body.materia,
        uv:req.body.uv,
        descripcion:req.body.descripcion,
    };
    //validando
    if(data.materia && data.uv && data.descripcion && data.materia!='' && data.uv!='' && data.descripcion!=''){
        let nuevoPost = new postModel(data);
        //nuevoPost.save
    }
}
module.exports=PostController;