import './App.css';
import { Listing } from './components/';
import etsyData from "./etsy.json";

function App() {
  return (
    <Listing items={etsyData} />
  );
}

export default App;
