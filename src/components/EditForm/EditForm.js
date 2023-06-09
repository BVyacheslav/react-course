import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditForm = ({ selectedPost, fetchPosts }) => {

  const [content, setContent] = useState(selectedPost.content ?? '');

  const navigate = useNavigate();

  const handleChange = ({ target: { value } }) => {
    setContent(value)
  }

  const handleClose = () => {
    navigate('/');
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: selectedPost.id,
        content: content
      })
    };
    fetch(`http://localhost:7070/posts/${selectedPost.id}`, requestOptions).then(() => fetchPosts());
    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="wrapper">
        <div>
          <label htmlFor="content">Редактировать публикацию</label>
          <button className="postButton" onClick={handleClose}>✘</button>
        </div>
        <input id="content" value={content} onChange={handleChange} />
      </div>
      <button className="createButton" type="submit">Сохранить</button>
    </form>
  )
}
