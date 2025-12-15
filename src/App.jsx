import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import CreatePost from './pages/CreatePost'
import Posts from './pages/Posts'
import UpdatePost from './pages/UpdatePost'
import DeletePost from './pages/DeletePost'

function App() {
return (
<div style={{ padding: 20 }}>
<nav>
<Link to="/register">Register</Link> | <Link to="/login">Login</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/getposts">Posts</Link> | <Link to="/createpost">Create Post</Link>
</nav>


<Routes>
<Route path="/register" element={<Register />} />
<Route path="/login" element={<Login />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/" element={<div>Home — use links above</div>} />
<Route path="/createpost" element={<CreatePost />} />
<Route path="*" element={<div>404</div>} />
<Route path='/getposts' element={<Posts />} />
<Route path='/updatepost/:id' element={<UpdatePost />} />
<Route path='/deletepost/:id' element={<DeletePost />} />
</Routes>
<br />
</div>
)
}


export default App