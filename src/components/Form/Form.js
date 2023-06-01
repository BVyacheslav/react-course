import { useState } from 'react';

export const Form = ({ fetchNotes }) => {

  const [content, setContent] = useState('');

  const handleChange = ({ target: { value } }) => {
    setContent(value)
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
    fetch('http://localhost:7070/notes', requestOptions).then(() => fetchNotes());
    setContent('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="wrapper">
        <label htmlFor="note">New Note</label>
        <input id="note" value={content} onChange={handleChange} />
      </div>
      <button className="addButton" type="submit">Добавить</button>
    </form>
  )
}
