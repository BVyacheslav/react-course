import { useState, useEffect } from 'react';
import './App.css';
import { Card, Form } from './components';

function App() {

  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const response = await fetch('http://localhost:7070/notes')
    if (!response.ok) {
      throw new Error(response);
    }
    const data = await response.json();
    setNotes(data);
  }

  useEffect(() => {
    fetchNotes();
  }, [])

  const handleDelete = (id) => () => {
    fetch(`http://localhost:7070/notes/${id}`, { method: 'DELETE' }).then(() => fetchNotes());
    fetchNotes();
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Notes</h1>
        <button className="iconButton" onClick={fetchNotes}>🔄</button>
      </div>
      {notes.map((note) =>
        <div className="note" key={note.id}>
          <Card content={note.content} />
          <button className="iconButton" onClick={handleDelete(note.id)}>✘</button>
        </div>
      )}
      <Form fetchNotes={fetchNotes} />
    </div>
  );
}

export default App;