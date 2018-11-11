const db = require("../models");
const User = db.user;

module.exports = {
  createUser: (req, res, next) => {
    const user = new User();
    user
      .save()
      .then(response => console.log(response))
      .catch(err => next(err));
  },
  addArticle: (user, article, next) => {
    db.User.findById({
      _id: user
    })
      .then(user => user.savedArticles.push(article))
      .then(res => res.json(res))
      .catch(err => next(err));
  }
};
