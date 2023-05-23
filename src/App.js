import './App.css';
import { Card } from './components';

function App() {
  return (
    <div className="App">
      <Card img="http://www.clipartbest.com/cliparts/RTG/Ek6/RTGEk6nrc.png">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </Card>
    </div>
  );
}

export default App;
