import React, { useEffect, useState } from 'react'
import API from '../services/api'
import { Navigate, useNavigate } from 'react-router-dom'

interface User {
  name: string
  email: string
}

export default function Dashboard() {
const [user, setUser] = useState<User | null>(null)
const navigate = useNavigate()
const token = localStorage.getItem('token')

if (!token) {
return <Navigate to="/login" />
}



useEffect(() => {
    const fetchMe = async () => {
    try {
        const res = await API.get('/me')
        // console.log(res.data.name)
        setUser(res.data)
    } catch (err) {
        console.error(err)
        localStorage.removeItem('token')
        navigate('/login')
    }
    }


fetchMe()
}, [navigate])


const logout = () => {
localStorage.removeItem('token')
navigate('/login')
}


return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4">Dashboard</h1>
                    <p className="lead text-muted">Welcome {user?.name}</p>
                    <button className="btn btn-danger" onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
        </>
    )
}