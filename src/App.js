
import { Route,Routes } from 'react-router-dom';
import './App.css';
import { Counter } from './componets/Counter';
import Login from './componets/Login';
import LogOut from './componets/LogOut';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/logout' element={<LogOut />} />
      </Routes>

    </div>
  );
}

export default App;
