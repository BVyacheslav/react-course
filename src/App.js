import { useState } from 'react';
import './App.css';

function App() {

  const [hex, setHex] = useState('');
  const [rgb, setRgb] = useState('');

  function hexToRgb(hex) {
    return `rgb(${'0x' + hex[1] + hex[2] | 0}, ${'0x' + hex[3] + hex[4] | 0}, ${'0x' + hex[5] + hex[6] | 0})`;
  }

  const handleChange = ({ target: { value } }) => {
    setHex(value)
    if (value.length > 6) {
      setRgb(value.match(/#[a-f0-9]{6}\b/gi) ? hexToRgb(value) : 'Ошибка!')
    }
  }

  return (
    <div className="App" style={{ backgroundColor: rgb }}>
      <div>
        <input className="hex" value={hex} onChange={handleChange}></input>
        <p className="rgb">{rgb}</p>
      </div>
    </div>
  );
}

export default App;
