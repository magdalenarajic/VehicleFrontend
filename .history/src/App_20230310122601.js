import './App.css';
import { Home } from './components/Home';
import VehicleMake  from './components/VehicleMake';
import {Navigation} from './components/Navigation';
import VehicleModel from './components/VehicleModel';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div >
      <div>
      <Navigation/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Makes' element={<VehicleMake/>} />
        <Route path='/Models' element={<VehicleModel/>} />
       </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
