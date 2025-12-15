import React, { useState } from 'react'
import API from '../services/api'
import { useNavigate } from 'react-router-dom'


export default function Login() {
const navigate = useNavigate()
const [form, setForm] = useState({ email: '', password: '' })


const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })


const handleSubmit = async (e) => {
e.preventDefault()
try {
const res = await API.post('/login', form)
localStorage.setItem('token', res.data.token)
// console.log(res.data.token)
navigate('/dashboard')
} catch (err) {
console.error(err)
alert(err.response?.data?.message || 'Login failed')
}
}


return (
    <div style={{ maxWidth: 420 }}>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
    <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
    <br /><br />
    <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
    <br /><br />
    <button type="submit">Login</button>
    </form>
    </div>
)
}