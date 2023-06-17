import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSelectedFacts } from '../../store/starWarsSlice';

export const Facts = () => {
  const [count, setCount] = useState('');
  const facts = useSelector(state => state.starWars.selectedFacts);

  const dispath = useDispatch();

  const handleChange = ({ target: { value } }) => {
    if (Number(value) > 0 && Number(value) < 6) {
      setCount(value);
      dispath(changeSelectedFacts(Number(value)))
    }
  }

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor="fact">Введите количество фактов: </label>
      <input id="fact" type="number" min="1" max="5" value={count} onChange={handleChange} />
      {facts.map(fact => <li key={fact}>{fact}</li>)}
      <hr />
    </div>
  );
}
