import { useState } from 'react';
import './App.css';
import { Table } from './components';
import { Form } from './components';

function App() {

  const [workouts, setWorkouts] = useState([
    {
      date: '20.07.2019',
      distance: 5.7
    },
    {
      date: '19.07.2019',
      distance: 14.2
    },
    {
      date: '18.07.2019',
      distance: 3.4
    },
  ]);

  const strDateToMs = (string) => {
    const [day, month, year] = string.split(".");
    return Date.parse(`${year}-${month}-${day}`);
  };

  const sortedWorkouts = workouts.slice().sort((a, b) => strDateToMs(b.date) - strDateToMs(a.date));

  return (
    <div className="App">
      <Form
        workouts={workouts}
        setWorkouts={setWorkouts}
      />
      <Table
        workouts={sortedWorkouts}
        setWorkouts={setWorkouts}
      />
    </div>
  );
}

export default App;
