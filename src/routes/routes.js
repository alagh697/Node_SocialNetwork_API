//import controller
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');

const routes = (app) => {
    //----USERS---//
    //route users
    app.route('/users')
    //select users
    .get((req, res, next) => {        
        console.log('method get from '+ req.originalUrl);
        next();
    }, userController.getUsers)
    //create a user
    .post( userController.addNewUser );

    // route d'un user
    app.route('/user/:userId')
    //find un user
    .get(userController.getUserById)
    //maj user
    .put(userController.updateUser)
    //suppression user
    .delete(userController.deleteUser);

    //route des posts d'un user
    app.route('/user/:userId/posts')
    .get(userController.getUserPosts);

    //---POST----
    //route posts
    app.route('/posts')
    //select posts
    .get((req, res, next) => {        
        console.log('method get from '+ req.originalUrl);
        next();
    }, postController.getPosts)
    //create a post
    .post( postController.addNewPost );

    // route d'un post
    app.route('/post/:postId')
    //find un post
    .get(postController.getPostById)
    //maj post
    .put(postController.updatePost)
    //suppression post
    .delete(postController.deletePost);
}

exports.routes = routes;