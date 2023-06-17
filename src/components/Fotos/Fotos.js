import { useSelector, useDispatch } from 'react-redux';
import { addFoto } from '../../store/profileSlice';

export const Fotos = () => {
  const fotos = useSelector(state => state.profile.fotos);

  const dispath = useDispatch();

  const handleChange = (e) => {
    dispath(addFoto(URL.createObjectURL(e.target.files[0])));
  }

  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="img">Загрузить фото: </label>
        <input type="file" id="img" name="img" accept="image/*" onChange={handleChange} />
      </div>
      <div>
        {fotos.map(foto => <img key={foto} src={foto} />)}
      </div>
    </>
  );
}
