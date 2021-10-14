const {bootstrap}=window
document.getElementById('signup').addEventListener('click',event=>{
  event.preventDefault()
  axios.post('/api/users/register',{
    username: document.getElementById('email').value,
    password: document.getElementById('pw').value
  })
    .then(()=>alert('You are now registered. Please log in.'))
    .catch(err=>console.error(err))
})
document.getElementById('login').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/users/login',{
    username: document.getElementById('login').value,
    password: document.getElementById('lpw').value
  })
    .then(({data:token})=>{
      if(token){
        localStorage.setItem('token',token)
        window.location='/'
      }else{
        alert('Invalid username or password')
      }
    })
    .catch(err=>console.error(err))
})