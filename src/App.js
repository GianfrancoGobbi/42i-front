import './App.css';
import Landing from './Components/Landing/Landing';
import { Route, Routes } from 'react-router-dom';
import { React} from 'react';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
