import { useState, useEffect } from 'react';
import './App.css';
import { List, Details } from './components';

function App() {

  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(0);

  const fetchUsers = async () => {
    const response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
    if (!response.ok) {
      throw new Error(response);
    }
    const data = await response.json();
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <div className="App">
      <List users={users} selectedUserId={selectedUserId} setSelectedUserId={setSelectedUserId} />
      {selectedUserId > 0 && <Details selectedUserId={selectedUserId} />}
    </div>
  );
}

export default App;