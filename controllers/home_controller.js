// const post = require('../models/post');
// const user = require('../models/user');

// module.exports.home = function (req, res) {
    
//     // console.log(req.cookies);
//     // res.cookie('user_id', 25);
    
//     // post.find({}, function(err,posts){

//     //     return res.render('home', {
//     //         title: "Home",
//     //         posts: posts,
//     //         user: user
//     //     });
//     // })

//     post.find({}).populate('user').exec(function(err,posts){
//         return res.render('home', {
//             title: "Home",
//             posts: posts
//         })
//     })
//     .exec(function(err,post){
//         user.find({},function(err,users){
//             return res.render('home',{
//                 title: "codieal | home",
//                 posts: posts,
//                 allusers: users
//             })
// // 
//         })
       
//     })
    
// }

// // module.exports.actionName = function(req, res){}

const post = require('../models/post');
const user = require('../models/user');

module.exports.home = function (req, res) {
    // Find all posts and populate the user field within each post
    post.find({}).populate('user').exec(function(err, posts){
        if (err) {
            console.log(err);
            return res.status(500).send('Error in finding posts');
        }

        // After getting posts, now find all users
        user.find({}, function(err, users){
            if (err) {
                console.log(err);
                return res.status(500).send('Error in finding users');
            }

            // Render the home with both posts and users
            return res.render('home', {
                title: "Home",
                posts: posts,
                allusers: users
            });
        });
    });
}