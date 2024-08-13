import logo from './logo.svg';
import React from 'react';
import './App.css';

import HomePage from './customer/pages/HomePage/HomePage';
import Nevigation from './customer/component/Nevigation/Nevigation';



function App() {
  return (
    <div className="">
     <Nevigation/>
     <div>
      <HomePage/>
     </div>
    </div>
  );
}

export default App;
