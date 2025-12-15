import { useParams } from 'react-router-dom'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../services/api'


const DeletePost = () => {
    const navigate = useNavigate()

    const id = useParams().id
    const deletePost = async () => {
        try {
            await API.delete(`/deletepost/${id}`)
            alert('Post deleted successfully')
            navigate('/getposts')
        } catch (err) {
            console.error(err)
            if(err.response.status === 401) alert('You are not authorized to delete this post')
            else alert('Failed to delete post')
        }
    }
  return (
    <div>
        <p>Are you sure you want to delete this post?</p>
        <button onClick={deletePost}>Delete</button>
    </div>
  )
}

export default DeletePost