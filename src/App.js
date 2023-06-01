import { useState } from 'react';
import './App.css';
import { Form } from './components';
import { Watch } from './components';

function App() {

  const [watches, setWatches] = useState([
    {
      city: 'Moscow',
      timezone: 3,
    },
    {
      city: 'Ekaterinburg',
      timezone: 5,
    },
  ]);

  const handleRemove = (city) => () => {
    setWatches(watches.filter((watch) => watch.city !== city));
  }

  return (
    <div className="App">
      <Form
        watches={watches}
        setWatches={setWatches}
      />
      {watches.map((watch) =>
        <div className="clock" key={watch.city}>
          <Watch watch={watch} />
          <button className="deleteButton" onClick={handleRemove(watch.city)}>✘</button>
        </div>
      )}
    </div>
  );
}

export default App;