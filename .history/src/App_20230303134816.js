import './App.css';
import { Home } from './components/Home';
import { VehicleMake } from './components/VehicleMake';
import {Navigation} from './components/Navigation';

import {BrowseRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowseRouter>
    <div className="App">
      <header className="App-header">
      </header>
      <Navigation/>
       <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/makes' component={VehicleMake} exact/>
       </Switch>
    </div>
    </BrowseRouter>
  );
}

export default App;
