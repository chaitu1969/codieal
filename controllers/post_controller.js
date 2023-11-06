const post = require("../models/post");
const comment = require("../models/coments");

module.exports.create = function (req, res) {
  post.create(
    {
      content: req.body.content,
      user: req.use._id,
    },
    function (err, post) {
      if (err) {
        console.log("error in creating a post");
        return;
      }
      return res.redirect();
    }
  );
};

module.exports.destroy = function (req, res) {
  post.findById(req.params.id, function (err, post) {
    // .id converting the bject id into string
    if (post.user == req.user.id) {
      post.remove();
      comment.deleteMany({ post: req.params.id }, function (err) {
        return res.redirect('back');
      });
    } else {
      return res.redirect();
    }
  });
};
