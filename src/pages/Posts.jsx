import {useState, useEffect} from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';


const Posts = () => {

    const navigate = useNavigate()
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const res = await API.get('/getPosts')
            if(res.status !== 200) throw new Error('Failed to fetch posts')
            if(res.data.length === 0) alert('No posts found')
            setPosts(res.data)
        }
        catch (err) {
            console.error(err)
        }
    }
    
    useEffect(() => {
    fetchPosts()
}, [navigate])

  return (
    <div>
        <h1>Posts</h1>
        <ul>
            {posts.map((post) => (
                <li key={post._id}>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <p>{post.user.name}</p>
                    {/* Updte Post */}
                    <button onClick={() => navigate('/updatepost/'+ post._id)}>Update</button>
                    {/* Delete Post */}
                    <button onClick={() => navigate('/deletepost/'+ post._id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Posts