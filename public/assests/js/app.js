const {axios}=window
axios.get('/api/posts')
  .then(({sata:posts})=>{
    console.log(posts)
  })
  .catch(err=>{
    console.log(err)
    window.location='/auth.html'
  })