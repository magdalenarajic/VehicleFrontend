import './App.css';
import { Home } from './components/Home';
import { VehicleMake } from './components/VehicleMake';
import {Navigation} from './components/Navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      </header>
      <Navigation/>
       <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/makes' component={VehicleMake} exact/>
       </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
