const {Model, DataTypes,}=require('sequelize')
const sequelize=require('../db')
class Post extends Model { }
Post.init({
  title: DateTypes.STRING,
  body: DataTypes.STRING
},{sequelize, modelName:'post'})
module.exports=Post