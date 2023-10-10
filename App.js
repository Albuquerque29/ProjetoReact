import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './paginas/Login';
import Msg from './paginas/Msg';
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/paginas/Login" exact component={LoginForm}/>
        <Route path="/paginas/Msg" component={Msg} />
    </Routes>    
    </Router>
  );
}

export default App;
