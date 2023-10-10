const user = require("../models/user");
const { use } = require("../routes");

module.exports.profile = function (req, res) {
  return res.render("user_profile", {
    title: "User Profile",
  });
};

// Render the sign in page
module.exports.signin = function (req, res) {
  return res.render("user_sign_in", {
    title: "codieal | sign in",
  });
};

// render the sign up page

module.exports.signUp = function (req, res) {
  return res.render("user_sign_up", {
    title: "Codieal | sign Up",
  });
};

// get the signup data

module.exports.create = function (req, res) {
  // Todo

  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }
    
    user.create(req.body); {
        return res.redirect('/users/sign-in');
    };

//   user.create(req.body, (err, user) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     return res.redirect("/users/sign-in");
//   });

  // if (!user) {
  //     user.create(req.body, function (err, user) {
  //         if (err) {
  //             console.log("error ");
  //             return;
  //         }
  //         return res.redirect('/users/sign-in');
  //     })
  // }

  //   user.findOne({ email: req.body.email },  (err, user) => {
  //     if (err) {
  //       console.log("error in creating user while singing up");
  //       return;
  //     }

  //     if (!user) {
  //       user.create(req.body, function (err, user) {
  //         if (err) {
  //           console.log("error in creating user while singing up");
  //           return;
  //         }

  //         return res.redirect("/users/sign-in");
  //       });
  //     } else {
  //       return res.redirect("back");
  //     }
  //   });

  //   User.findOne(
  //     {
  //       email: req.body.email,
  //     },
  //     function (err, user) {
  //       if (err) {
  //         console.log("error in finding user in signing up");
  //         return;
  //       }

  //       if (!user) {
  //         user.create(req.body, function (err, user) {
  //           if (err) {
  //             console.log("error whie creating singup");
  //             return;
  //           }
  //             return res.redirect('/users/sign-in');
  //         });
  //       } else {
  //         return res.redirect('back');
  //       }
  //     }
  //   );
};

// Sign In for create session
module.exports.createSession = function (req, res) {
    
};
