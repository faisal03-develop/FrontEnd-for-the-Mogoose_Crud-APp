import React, { useEffect, useState } from 'react'
import API from '../services/api'
import { Navigate,useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const UpdatePost = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const id = useParams().id
    const [form, setForm] = useState({ title: '', description: '' })

    useEffect(() => {
        const getPost = async () => {
            const res = await API.get(`/getPost/${id}`)
            console.log(res.data)
            setForm({ title: res.data.title, description: res.data.description })
            
        }
        getPost()
    }, [id])



    if(!token){
        return <Navigate to="/login" replace />;
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await API.put(`/updatepost/${id}`, form)
            alert('Post updated successfully')
            navigate('/getposts')
        } catch (err) {
            console.error(err)
            if(err.response.status === 401) alert('You are not authorized to update this post')
            else{
            alert('Failed to update post')}
        }
    }

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  return (
    <div>
        <h2>Update Post</h2>
        <form onSubmit={handleSubmit}>  
            <input type="text" name="title" value={form.title}  onChange={handleChange}/>
            <input type="text" placeholder='Description' name='description' value={form.description}  onChange={handleChange} />    
            <button type='submit' >Update</button>
        </form>
        {/* <button onClick={getPost}>Post</button> */}
    </div>
  )
}

export default UpdatePost