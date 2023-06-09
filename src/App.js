import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Posts, Form, PostDetails } from './components';

import './App.css';

function App() {

  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});

  const fetchPosts = async () => {
    const response = await fetch(' http://localhost:7070/posts')
    if (!response.ok) {
      throw new Error(response);
    }
    const data = await response.json();
    setPosts(data);
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Posts posts={posts} setSelectedPost={setSelectedPost} />} />
        <Route path="/posts">
          <Route path="new" element={<Form fetchPosts={fetchPosts} />} />
          <Route path=":postId" element={<PostDetails selectedPost={selectedPost} fetchPosts={fetchPosts} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
