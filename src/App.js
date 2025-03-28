import logo from './logo.svg';
import './App.css';
import React, {useEffect, Suspense, Switch} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';

function App() {

  return (
    <>
    <div className="app">
      <Router>
        <Routes />
      </Router>
      </div>
    </>
  );
}

export default App;
