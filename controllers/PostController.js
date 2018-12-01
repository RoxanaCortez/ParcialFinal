const mongoose = require('mongoose'),
postModel = require('../models/Post');

PostController ={};
//creando
PostController.create = function(req,res){
    //obteniendo los datos
    let data={
        materia:req.body.materia,
        uv:req.body.uv,
        descripcion:req.body.descripcion,
    };
    //validando
    if(data.materia && data.uv && data.descripcion && data.materia!='' && data.uv!='' && data.descripcion!=''){
        //creando nuevo objeto
        let nuevoPost = new postModel(data);
        //guardando
        nuevoPost.save(function(err){
            if(err){
                res.status(500);
                res.json({code:500,err});
            }else{
                res.json({ok:true, message:'se ha guardado con exito',data});
            }
       });
    }else{
        res.status(400);
        res.json({code:400,menssage:'Los datos no estan completos'});
    }
    
},
//Obteniendo
PostController.getAll = function(req,res){
    //obteniendo todos los post
    postModel.find({},function(err,posts){
        if(err){
            res.status(500);
            res.json({code:500,err});
        }else{
            res.json(posts);
        }
    });
},
PostController.get = function(req,res){
    //obteniendo un post
    postModel.findOne({_id:req.params.id},function(err,post){
        if(err){
            res.status(500);
            res.json({code:500,err}); 
        }else{
            res.json(post);
        }
    });
},
//Update
postModel.update = function(req,res){
    let update={
        materia:req.body.materia,
        uv:req.body.uv,
        descripcion:req.body.descripcion
    };
    postModel.findByIdAndUpdate(req.params.id, update, function(err,old){
        if(err){
            res.status(500);
            res.json({code:500,err}); 
        }else{
            res.json({ok:true,old,update});
        }
    });
},

//delete
postModel.delete = function(req,res){
    postModel.findByIdAndRemove(req.params.id, function(err,eliminado){
        if(err){
            res.status(500);
            res.json({code:500,err}); 
        }else{
            res.json({ok:true,eliminado});
        }
    });
}
module.exports=PostController;