import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Guestbook from "./pages/Guestbook";
import Ourstory from "./pages/Ourstory";
import Weddingparty from "./pages/Weddingparty";
import RegistryGifts from "./pages/RegistryGifts";

import './App.css';

function App() {
  // const URL = "http://localhost:3000";

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="/ourstory" element={<Ourstory />} />
          <Route path="/weddingparty" element={<Weddingparty />} />
          <Route path="/registrygifts" element={<RegistryGifts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}





export default App;

