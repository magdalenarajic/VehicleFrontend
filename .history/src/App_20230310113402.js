import './App.css';
import { Home } from './components/Home';
import VehicleMake  from './components/VehicleMake';
import {Navigation} from './components/Navigation';
import VehicleModel from './components/VehicleModel';
import image from '../src/img/photo2.jpg';

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
        <Route path='/Models' element={<VehicleModel/>} />
       </Routes>
    </div>
    <div style={{ backgroundImage:`url(${image})` , backgroundSize: "cover"}}>
                This is Home page.
            </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
