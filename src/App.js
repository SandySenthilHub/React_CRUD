import React from 'react';
import './App.css';
import FirstPage from './components/firstpage';
import Create from './components/create';
import View from './components/View';
import Update from './components/update';
// import Show from './components/show';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="main">
        {/* <img className='bg-img' src={office}/> */}
        {/* <h2 className="main-header">React CRUD Operations</h2> */}
        
        <div className='box'>
          <Routes>
          <Route exact path='/' element={<FirstPage/>} />
          <Route exact path='/create' element={<Create/>} />
          <Route exact path='/view' element={<View/>} />
          <Route path='/update' element={<Update/>} />
          {/* <Route exact path='/show' element={<Show/>}/> */}

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;