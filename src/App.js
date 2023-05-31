import { useState } from 'react';
import './App.css';
import { Table } from './components';
import { Form } from './components';
import { Watch } from './components';

function App() {

  const [watches, setWatches] = useState([
    {
      city: 'Moscow',
      timezone: 3,
      time: ''
    },
    {
      city: 'Ekaterinburg',
      timezone: 5,
      time: ''
    },
  ]);

  return (
    <div className="App">
      <Form
        watches={watches}
        setWatches={setWatches}
      />
      {watches.map((watch, watchIndex) => <Watch key={watch.city} watch={watch} watchIndex={watchIndex} watches={watches} setWatches={setWatches}/>)}
    </div>
  );
}

export default App;