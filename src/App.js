import React from 'react';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productpage from './pages/Product/Product';
import Header from './header.jsx';



function App() {
  return (
   <Router>
     <Header />
    <Routes>
    
           <Route index element={<Home />} />
           <Route path="/products" element={<Productpage />} />



    </Routes>
   </Router>
   
  );
}

export default App;
