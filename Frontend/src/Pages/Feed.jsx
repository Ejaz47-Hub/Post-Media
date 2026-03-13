import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Feed = () => {
    const[post, setPosts] = useState([{
        _id: 1,
        image: 'https://www.freepik.com/',
        caption: 'This is the first post',
    }])

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then((response) => {
                setPosts(response.data.posts)
                
            })
            .catch((error) => {
                console.error('Error fetching posts:', error)
            })
    },[])


  return (
    <section className='feed-section'>
       {
        post.length > 0 ? (
            post.map((post) => (
                <div key={post._id} className='post-card'>
                    <img src={post.image} alt={post.caption} />
                    <p>{post.caption}</p>
                </div>
            ))
        ) : (
            <p>No posts available.</p>
        )

       }
    </section>
  )
}

export default Feed