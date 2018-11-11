const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date
  },
  url: {
    type: String
  },
  subtitle: {
    type: String
  }, 
  saved: {
    type: Boolean
  }

});

const Article = mongoose.model("Article", articleSchema)

module.exports = Article