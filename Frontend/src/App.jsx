import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import CreatePost from './Pages/CreatePost.jsx'
import Feed from './Pages/Feed.jsx'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/create-post'element={<CreatePost/>} />
        <Route path='/feed' element={<Feed/>} />
      </Routes>
    </Router>
  )
}

export default App