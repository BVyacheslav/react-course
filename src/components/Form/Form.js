import { useState } from 'react';

export const Form = ({ workouts, setWorkouts }) => {

  const initialState = {
    date: '',
    distance: ''
  }

  const [form, setForm] = useState(initialState);

  const handleChange = ({ target: { id, value } }) => {
    setForm(prevState => ({ ...prevState, [id]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const dateWorkoutIndex = workouts.findIndex(workout => workout.date === form.date);
    if (dateWorkoutIndex < 0) {
      const newWorkout = {
        date: form.date,
        distance: form.distance
      };
      setWorkouts(prevState => ([...prevState, newWorkout]));
    } else {
      const newWorkouts = [...workouts];
      newWorkouts[dateWorkoutIndex].distance = Number(newWorkouts[dateWorkoutIndex].distance) + Number(form.distance);
      setWorkouts(newWorkouts);
    }
    setForm(initialState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputWrapper">
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input id="date" value={form.date} onChange={handleChange} />
      </div>
      <div className="inputWrapper">
        <label htmlFor="distance">Пройдено км</label>
        <input id="distance" value={form.distance} onChange={handleChange} />
      </div>
      <button className="addButton" type="submit">ОК</button>
    </form>
  )
}
