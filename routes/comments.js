const express = require('express');
const router = express.router();
const passport = require('passport');
// const homeController = require('../controllers/home_controller');
// console.log('router loaded');

// router.get('/',homeController.home);
// router.use('/users',require('./users'));
// router.use('/posts',require('./posts'));
// router.use('./comments', require('./comments'));
// router.get()

const commentsController = require('../controllers/comment_controller');
router.post('/create',passport.checkAutherntication, commentsController.create);
router.get('/destroy', passport.checkAutherntication, commentsController.destroy);


module.exports = router;

