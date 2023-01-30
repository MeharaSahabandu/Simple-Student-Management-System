import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


//import components
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import AllStudents from './components/AllStudents';
import ViewProfile from './components/ViewProfile';

//css
import './css/AddStudent.css'
import './css/AllStudents.css'


function App() {



  return (

    <Router>
      <div>
        <Routes>
        <Route path='/' element={<><Header/></>}/>
          <Route path='/add' element={<><Header/><AddStudent/></>}/>
          <Route path='/all' element={<><Header/><AllStudents/></>}/>
          <Route path='/viewProfile' element={<><Header/><ViewProfile/></>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
