import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Form = ({ fetchPosts }) => {

  const [content, setContent] = useState('');
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
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 0,
        content: content
      })
    };
    fetch('http://localhost:7070/posts', requestOptions).then(() => fetchPosts());
    setContent('');
    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="wrapper">
        <div>
          <label htmlFor="content">Публикация</label>
          <button className="postButton" onClick={handleClose}>✘</button>
        </div>
        <input id="content" value={content} onChange={handleChange} />
      </div>
      <button className="createButton" type="submit">Опубликовать</button>
    </form>
  )
}
