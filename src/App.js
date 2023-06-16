import './App.css';
import { Table } from './components';
import { Form } from './components';
import { FilterPanel } from './components';

function App() {

  return (
    <div className="App">
      <FilterPanel />
      <Form />
      <Table />
    </div>
  );
}

export default App;