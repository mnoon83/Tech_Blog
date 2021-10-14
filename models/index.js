const User=require('./User.js')
const Post=require('Post.js')
User.hasMant(Post, {foreignKey:'uid'})

module.exports={User, Post}