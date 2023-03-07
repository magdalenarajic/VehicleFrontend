import './App.css';
import { Home } from './components/Home';
import { VehicleMake } from './components/VehicleMake';
import {Navigation} from './components/Navigation';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <header>
      <Navigation/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/makes' element={<VehicleMake/>} />
       </Routes>
       </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
