import './App.css';
import Home from './components/pages/Home';
import React from 'react';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Switch>
        <Route path='/' exact component={Home}/>
     </Switch>
    </div>
  );
}

export default App;
