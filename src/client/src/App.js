import React from 'react';
import './App.css';
import Login from './components/Login';
import logo from './ECSlogo.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Register from './components/Register';
import Content from './components/Content';
import Home from './components/Home';

function App() {

  library.add(faThumbsUp, faThumbsDown)

  return (
    <Router>
      <div className="App">
        <img alt="ECS logo" src={logo} className="ECSlogo" />

        <Routes>
          <Route path='/' element={<Login />} />

          <Route path='register' element={<Register />} />

          <Route path='home' element={<Content />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
