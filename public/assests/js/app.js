const {axios}=window
document.getElementById('create').addEventListener('click', event=>{
  event.preventDefault()
  axios.post('/api/posts',{
    title:document.getElementById('title').value,
    body:document.getElementById('body').value
  },{
    headers:{
      Authorization:`Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(({data: post})=>{
      console.log(post)
    })
    .catch (err=>console.error(err))
})
axios.get('/api/posts')
  headers:{
    Authorization: `Bearer ${localStorage.getItem('token')}`
  })
})
  .then(({data:posts})=>{
    posts.forEach(({title, body, u:{username}})=>{
      const postElem=document.createElement('div')
      postElem.className='ms-2 me-auto'
      postElem.innerHTML=`
        <div class="ms-2 me-auto">
          <div class="fw-bold">${title}</div>
          ${body}
        </div>
        <span class="badge bg-dark rounded-pill">${username}</span>
        <span class="delete badge bg-danger rounded-pill">X</span>
      `
      document.getElementById('posts').append(postElem)
    })
  })
  .catch(err=>{
    console.log(err)
    window.location='/auth.html'
  })