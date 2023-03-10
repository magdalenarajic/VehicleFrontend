import './App.css';
import { Home } from './components/Home';
import VehicleMake  from './components/VehicleMake';
import {Navigation} from './components/Navigation';
import VehiceModel from './components/VehiceModel';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className='container'>
    <header>
      <h3 className="m-3 d-flex justify-content-center">
        Vehicle App
      </h3>
      </header>
      <div>
      <Navigation/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Makes' element={<VehicleMake/>} />
        <Route path='/Models' element={<VehiceModel/>} />
       </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
