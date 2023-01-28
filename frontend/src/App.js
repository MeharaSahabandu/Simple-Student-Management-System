import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


//import components
import Header from './components/Header';
import AddStudent from './components/AddStudent';

//css
import './css/AddStudent.css'


function App() {
  return (

    <Routes>
      <Header />
    </Routes>

  );
}

export default App;
