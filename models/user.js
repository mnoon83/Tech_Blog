const{Model,DataTypes}=require('sequelize')
const sequelize=require('../db')
class User extends Model{ }
User.init({
  username:DataType.STRING
},{sequalize, modelName:'user'})
model.exports=User
