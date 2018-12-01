const mongoose = require('mongoose');

let postModel = new mongoose.Schema(
   { materia:{
        type: String,
        index: true,
        unique: true
    },
    uv:String,
    descripcion: Number}
);

module.exports= mongoose.model('Post', postModel);