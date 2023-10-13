const { model } = require("mongoose");
const User = require("../models/user");
// const { use } = require("../routes");

module.exports.profile = function (req, res) {
  return res.render("user_profile", {
    title: "User Profile",
  });
};

// Render the sign in page
module.exports.signin = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/profile");
  }
  //
  return res.render("user_sign_in", {
    title: "codieal | sign in",
  });
};

// render the sign up page

module.exports.signUp = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/profile");
  }

  return res.render("user_sign_up", {
    title: "Codieal | sign Up",
  });
};

// get the signup data

module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }
  // Todo

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in creating user while singing up");
      return;
    }

    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("error in creating user while singing up");
          return;
        }

        return res.redirect("/users/sign-in");
      });
    } else {
      return res.redirect("back");
    }
  });
};

// Sign In for create session
// module.exports.createSession = function (req, res) {
//   User.findOne({ email: req.body.email }, (err, user) => {
//     // res.cookies("user_id", user.id);
//     if (err) {
//       console.log("error"), err;
//     }

//     if (user) {
//       if (user.password != req.body.password) {
//         return res.redirect("back");
//       }
//       // res.cookies('user_id', user.id);
//       // res.cookies.user("user_id", user.id);
//       return res.redirect("/users/profile");
//     } else {
//       return res.redirect("back");
//     }
//   });
// };

module.exports.createSession = function (req, res) {
  return res.redirect("/");
};

module.exports.destroSession = function (req, res) {
  req.logout(function (err) {
    if (err) {
      console.log(err);
    }
    return res.redirect("/users/sign-in");
  });
};
