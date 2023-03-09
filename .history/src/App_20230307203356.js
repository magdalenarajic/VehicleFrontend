import './App.css';
import { Home } from './components/Home';
import VehicleMake  from './components/VehicleMake';
import {Navigation} from './components/Navigation';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div  className="mx-auto" style={{width: "800"}}>
    <header>
    <div>
      <h3 className="m-3 d-flex justify-content-center">
        Vehicle App
      </h3>
      </div>
      </header>
      <div className='container'>
      <Navigation/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Makes' element={<VehicleMake/>} />
       </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
