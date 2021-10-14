const { User, Post } = require('../models/index.js')

const route=require('express').Router()
router.use('/api', require('./userRoutes.js'))
User.hasMany(Post, {foreignKey:'uid'})
Post.belongsTo(User, {as:'u', foreignKey:'uid'})
module.exports=router