import './App.css';
import { Home } from './components/Home';
import { VehicleMake } from './components/VehicleMake';
import {Navigation} from './components/Navigation';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      </header>
      <Navigation/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/makes' element={<VehicleMake/>} />
       </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
