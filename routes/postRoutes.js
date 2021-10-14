const router=require('express').Router()
const {Post}=require('../models')
const passport=require('passport')
router.get('/posts',passport.authenticate('jwt')(req,res)=>Post.findAll()
  .then(posts=>res.jason(posts))
  .catch(err=>console.log(err)))
router.post('/posts',passport.authenticate('jwt'),(req,res)=>Post.create({
  title:req.body,
  body:req.body,
  uid:req.user.id
})
  .then(post=>res.json(post))
  .catch(err=>console.log(err)))
router.delete('/posts/:id',(req,res)=> Post.destroy({where:{id:req.params.id}})
  .then(()=>res.sendStatus(200))
  .catch(err=>console.log(err)))
module.exports=router