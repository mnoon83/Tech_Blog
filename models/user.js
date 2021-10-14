const pls=require('passport-local-sequelize')
const{DataTypes}=require('sequelize')
const sequelize=require('../db')
// class User extends Model{ }
// User.init({
//   username:DataType.STRING
// },{sequalize, modelName:'user'})
const User=pls.defineUser(sequelize, {username:DataTypes.STRING})

model.exports=User
