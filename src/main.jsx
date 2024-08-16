import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home.jsx';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import NotFound from './Pages/Notfound.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </main>
  </Router>
);