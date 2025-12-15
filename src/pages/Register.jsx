import React, { useState } from 'react'
import API from '../services/api'
import { useNavigate } from 'react-router-dom'


export default function Register() {
const navigate = useNavigate()
const [form, setForm] = useState({ name: '', email: '', password: '' })


const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })


const handleSubmit = async (e) => {
e.preventDefault()
try {
const res = await API.post('/register', form)
localStorage.setItem('token', res.data.token)
alert('Registered successfully')
navigate('/dashboard')
} catch (err) {
console.error(err)
alert(err.response?.data?.message || 'Registration failed')
}
}


return (
<div style={{ maxWidth: 420 }}>
<h2>Register</h2>
<form onSubmit={handleSubmit}>
<input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
<br /><br />
<input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
<br /><br />
<input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
<br /><br />
<button type="submit">Register</button>
</form>
</div>
)
}