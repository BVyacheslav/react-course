import { useState } from 'react';

export const Form = ({ watches, setWatches }) => {

  const initialState = {
    city: '',
    timezone: ''
  }

  const [form, setForm] = useState(initialState);

  const handleChange = ({ target: { id, value } }) => {
    setForm(prevState => ({ ...prevState, [id]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const cityWatchIndex = watches.findIndex(watch => watch.city === form.city);
    if (cityWatchIndex < 0) {
      const newWatches = {
        city: form.city,
        timezone: form.timezone,
        time: ''
      };
      setWatches(prevState => ([...prevState, newWatches]));
    }
    setForm(initialState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="wrapper">
        <label htmlFor="city">Название</label>
        <input id="city" value={form.city} onChange={handleChange} />
      </div>
      <div className="wrapper ">
        <label htmlFor="timezone">Временная зона</label>
        <input id="timezone" value={form.timezone} onChange={handleChange} />
      </div>
      <button className="addButton" type="submit">Добавить</button>
    </form>
  )
}
