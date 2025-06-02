import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

import Dashboard from './pages/dashboard';
import Student from './pages/student';

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/student" element={<Student />} />

          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;