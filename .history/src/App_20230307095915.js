import './App.css';
import { Home } from './components/Home';
import VehicleMake  from './Makes/VehicleMake';
import {Navigation} from './components/Navigation';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <h3 className="m-3 d-flex justify-content-center">
        Vehicle App
      </h3>
      <Navigation/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Makes' element={<VehicleMake/>} />
       </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
