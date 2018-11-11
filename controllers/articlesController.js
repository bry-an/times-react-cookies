const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.Article.find(req.query)
      .then(response => res.json(response))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    if (req.cookies.user) {
        console.log('cookie found', req.cookies.user)
      db.Article.update(req.body, req.body, { upsert: true })
        .then(db.User.addArticle(req.cookies.user, req.body))
        .then(response => res.json(response))
        .catch(err => res.status(422).json(err));
    }
    if (!req.cookies.user) {
        db.Article.update(req.body, req.body, { upsert: true })
            const User = db.User;
            const user = new User()
            user
                .save()
                .then(response => res.cookie('user', response._id))
    }
  },
  delete: (req, res) => {
    db.Article.findById({
      _id: req.params.id
    })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
