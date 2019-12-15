import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';
import { TimesTables } from './pages/TimesTables'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <BrowserRouter>
          <NavLink to='/home'>Home</NavLink>
          <Switch>
            <Route exact path="/home">
              <TimesTables />
            </Route>
          </Switch>

        </BrowserRouter>        
      </header>
    </div>
  );
}

export default App;
