import ReactDOM from 'react-dom/client'
import Home from './Pages/Home.jsx';
import './index.css'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import NotFound from './Pages/Notfound.jsx';
import Login from './Pages/Login.jsx';
import { store } from './app/store.js';
import Profile from './Pages/Profile.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  </Provider>

);