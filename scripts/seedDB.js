const mongoose = require('mongoose')
const db = require('../models')

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/timesreact'
)
const articleSeed = 
    [
        {
            title: 'Ali Sells Jersey House And Moves to Chicago',
            date: '1974-07-18T00:00:00Z',
            url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
        },
        {
            title: 'Ali Sells Jersey House And Moves to Chicago',
            date: '1974-07-18T00:00:00Z',
            url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
        },
        {
            title: 'Ali Sells Jersey House And Moves to Chicago',
            date: '1974-07-18T00:00:00Z',
            url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
        },
        {
            title: 'Ali Sells Jersey House And Moves to Chicago',
            date: '1974-07-18T00:00:00Z',
            url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
        },
    ]

db.Article
    .remove({})
    .then(() => db.Article.insertMany(articleSeed))
    .then(res => {
        console.log(res)
        process.exit(0)
    })
    .catch(err => {
        console.log(err)
        process.exit(1)
    })
    