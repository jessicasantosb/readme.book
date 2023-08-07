import React from 'react';
import './styles/App.css';
import {Outlet} from 'react-router-dom'

import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
