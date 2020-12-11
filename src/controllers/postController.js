const mongoose = require('mongoose');

const PostSchema = require('../models/postModel');

//Creation du model post
const Post = mongoose.model('Post', PostSchema.post);

//export de la methode d'ajout
exports.addNewPost = (req, res) => {
    const newPost = new Post( req.body );

    newPost.save( (err, post) => {
        if (err) res.send(err);
        res.json(post);
        console.log('function addNewPost from postController return: ', post);
    });
}

//export de la methode qui liste tous les post
exports.getPosts = (req, res) => {

    Post.find({}, (err, post) => {
        if (err) res.send(err);
        res.json(post);
        console.log('function getPosts from postController return: ', post);
    });
}

//export de la methode qui récupère un post
exports.getPostById = (req, res) => {

    Post.findById(req.params.postId, (err, post) => {
        if (err) res.send(err);
        res.json(post);
        console.log('function getPostById from postController return: '+ post + 'whith id ', post.id);
    });
}

//Maj
exports.updatePost = (req, res) => {

    Post.findOneAndUpdate({ _id: req.params.postId }, req.body, {new: true}, (err, post) => {
        if (err) res.send(err);
        res.json(post);
        console.log('function updatePost from postController return: '+ post + 'whith id ', post.id);
    });
}

//Delete
exports.deletePost = (req, res) => {

    Post.findOneAndDelete({ _id: req.params.postId }, (err, post) => {
        if (err) res.send(err);
        res.json(post);
        console.log('function deletePost from postController return: '+ post + 'whith id ', post.id);
    });
}