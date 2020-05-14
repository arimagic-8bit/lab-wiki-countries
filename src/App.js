import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetail from './components/CountryDetail'

import {BrowserRouter as Router, Route} from 'react-router-dom'



function App() {
  return (
    <div id='root'>
    <Router>
    
      <Navbar />

    <div className="container">

      <div className='row'>
        <CountriesList />
        <Route path='/country-detail/:cca3' component={CountryDetail} />
            
      </div>
       
    </div>
     

     </Router>

    </div>
  );
}

export default App;
