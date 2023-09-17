//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Oglas from './components/Oglas';
import { BrowserRouter } from 'react-router-dom';
import PregledOglasa from './components/PregledOglasa';
import FiltrirajPretragu from './components/FiltrirajPretragu';
import DodajOglas from './components/DodajOglas';
import Login from './components/Login';
import Register from './components/Register';
import {Provider} from 'react-redux';
import store from './Store.js';
import MojiOglasi from './components/MojiOglasi';
import IzmijeniOglas from './components/IzmijeniOglas';
function App() {
  return (
    <Provider store={store}>
    <div><Router> 
      <Switch><Route exact path='/' component={Home} />
       <Route path='/oglas' component={Oglas} />
      <Route path='/pregledOglasa' component={PregledOglasa} />
      <Route path='/filtrirajPretragu' component={FiltrirajPretragu} />
      <Route path='/dodajOglas' component={DodajOglas} /> 
     <Route path='/izmijeniOglas' component={IzmijeniOglas} />
      <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/mojiOglasi' component={MojiOglasi} />
      </Switch>
      </Router> 
    
    </div>
    </Provider>
  );
}

export default App;
