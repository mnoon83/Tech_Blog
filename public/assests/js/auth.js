document.getElementById('signup').addEventListener('click',event=>{
  event.preventDefault()
  axios.post('/api/users/register',)
})
document.getElementById('login').addEventListener('click', event => {
  event.preventDefault()
})