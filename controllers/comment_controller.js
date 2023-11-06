const comment = require('../models/coments');
// const commnet = require('../models/coments');
const post = require('../models/post');

module.exports.create = function(req,res) {
    post.findById(req.body.post, (err,post) => {
        if(psot) {
            comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            }, (err,commnet) => {
                post.commnet.push(comment);
                post.save();


                res.redirect('/');
            })
        }
    })
}