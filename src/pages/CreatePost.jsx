import {useState} from 'react';
import { Navigate,useNavigate } from 'react-router-dom';
import API from '../services/api';


const CreatePost = () => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    
    const [form, setForm] = useState({ title: '', description: '' })

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    if(!token){
        return <Navigate to="/login" replace />;
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await API.post('/createPost', form,{
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            alert('Post created successfully')
            navigate('/getposts')
        } catch (err) {
            console.error(err)
            alert(err.response?.data?.message || 'Post creation failed')
        }
    }

  return (
    <div>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" onChange={handleChange} placeholder="Title"></input>
            <input type="text" placeholder='Description' name='description' onChange={handleChange} />    
            <button type='submit'>Post</button>
        </form>
    </div>
  )
}

export default CreatePost