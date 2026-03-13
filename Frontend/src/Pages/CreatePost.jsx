import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




const CreatePost = () => {
const navigate = useNavigate()

    const handleSubmit = async(e) => {
    e.preventDefault()


    const formData = new FormData(e.target)

    axios.post('http://localhost:3000/create-post', formData)
    .then((response) => {
        navigate('/feed')
        console.log(response.data)
        alert("Post created successfully")
    })
    .catch((error) => {
        console.error('Error creating post:', error)
        alert("Failed to create post")
    })
}
  return (
    <section className='create-post-section'>
        <h1>Create post</h1>
        <form onSubmit={handleSubmit}>
            <input type="file" name='image' accept='image/*' />
            <input type="text" name='caption' required placeholder='Enter caption'/>
            <button type='submit'>Submit</button>
        </form>
    </section>
  )
}

export default CreatePost