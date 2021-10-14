const { isBuffer } = require('lodash')
const { User } = require('../models')
const passport=require('passport')
const jwt=require('jsonwebtoken')
const { resolveAny } = require('dns/promises')
const router=require('express').Router()
router.post('/users/register',(req,res)=>{
  User.register(new User({username: req.body.userman}),req.body.password,err=>{
    if(err){onsole.log(err)}
    res.sendStatus(200)
  })
})
router.post('/users/login',(req,req)=>{
  User.authenticate()(req.body.password,(err,user)=>{
    if(err){console.log(err)}
    res.json(user ? jwt.sign({id:user.id}, process.env.SECRET):null)
  })
})
router.get('/users/posts',passport.authenticate('jwt'),(req,res)=>{
  req.json(req.user)
})
module.exports=router