import './App.css';
import { Data, Loading, Error } from './components';

function App() {
  return (
    <div className="App">
      <Data />
      <Error />
      <Loading />
    </div>
  );
}

export default App;
