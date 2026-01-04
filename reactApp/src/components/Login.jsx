import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login(props) {
  const [email, setEmail] = useState('')
  
  const [password, setPassword] = useState('')
  const [confirmPassword, setCOnfirmPassword] = useState('')
  
  const [error, setError] = useState('')
  const navigator = useNavigate()

  const handleSubmit = async() => {
    console.log("Login button clicked", email, password)
    if (!email || !password) {
      setError('Please fill all the fields.')
    }

    const res = await fetch('http://localhost:3000/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password }),
   });
   const data = await res.json();
   
   if (res.status === 200) {
    localStorage.setItem('token', data.token)
    navigator('/')
   }
   else {
    setError('Something went wrong.')
   }
  }

  return (
    <>
      <div>Login page</div>
      <p>Enter your email</p>
      <input name='email' value={email} onChange={e => setEmail(e.target.value)} />

      <p>Enter your password</p>
      <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} />
      <br/>
      <br/>
      <button onClick={handleSubmit}> Login </button>
      <p> {error} </p>
    </>
  )
}

export default Login
