const mongoose = require('mongoose');

const UserSchema = require('../models/userModel');

const PostSchema = require('../models/postModel');

//Creation du model user
const User = mongoose.model('User', UserSchema.user);

const Post = mongoose.model('Post', PostSchema.post);

//export de la methode d'ajout
exports.addNewUser = (req, res) => {
    const newUser = new User( req.body );

    newUser.save( (err, user) => {
        if (err) res.send(err);
        res.json(user);
        console.log('function addNewUser from userControllers return: ', user);
    });
}

//export de la methode qui liste tous les user
exports.getUsers = (req, res) => {

    User.find({}, (err, user) => {
        if (err) res.send(err);
        res.json(user);
        console.log('function getUsers from userController return: ', user);
    });
}

//export de la methode qui récupère un user
exports.getUserById = (req, res) => {

    User.findById(req.params.userId, (err, user) => {
        if (err) res.send(err);
        res.json(user);
        console.log('function getUserById from userControllers return: '+ user + 'whith id ', user.id);
    });
}

//Maj
exports.updateUser = (req, res) => {

    User.findOneAndUpdate({ _id: req.params.userId }, req.body, {new: true}, (err, user) => {
        if (err) res.send(err);
        res.json(user);
        console.log('function updateUser from userControllers return: '+ user + 'whith id ', user.id);
    });
}

//Delete
exports.deleteUser = (req, res) => {

    User.findOneAndDelete({ _id: req.params.userId }, (err, user) => {
        if (err) res.send(err);
        res.json(user);
        console.log('function deleteUser from userControllers return: '+ user + 'whith id ', user.id);
    });
}

//User posts
exports.getUserPosts = (req, res) => {

    Post.find({user_id: req.params.userId}, (err, post) => {
        if (err) res.send(err);
        res.json(post);
        console.log('function getUserPosts from userController return: ', post);
    });
}