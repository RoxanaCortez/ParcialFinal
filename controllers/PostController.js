const mongoose = require('mongoose'),
postModel = require('../models/Influencer');

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
                res.json({200:true, message:'se ha guardado con exito',data});
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
            res.json({200:true, posts});
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
            res.json({200:true, post});
        }
    });
},
//Update
PostController.update = function(req,res){
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
            res.json({200:true,old,update});
        }
    });
},

//delete
PostController.delete = function(req,res){
    postModel.findByIdAndRemove(req.params.id, function(err,eliminado){
        if(err){
            res.status(500);
            res.json({code:500,err}); 
        }else{
            res.json({200:true,eliminado});
        }
    });
}
module.exports=PostController;