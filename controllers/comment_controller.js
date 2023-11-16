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
    });

}

module.exports.destroy = function(req,res){
    comment.findById(req.params.id, function(err,comment){
        if(comment.user == req.user.id){
            let postId = comment.post;

            comment.remove();

            post.findByIdAndUpdate(postId,{$pull: req.params.id},function(err,post){
                return redirect('back');
            })
        }
    });
}