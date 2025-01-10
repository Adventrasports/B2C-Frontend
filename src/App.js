import React from 'react';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productpage from './pages/Product/Product';
import Header from './header.jsx';
import Collectionpage from './pages/Product/Collection'



function App() {
  return (
   <Router>
     <Header />
    <Routes>
    
           <Route index element={<Home />} />
           <Route path="/products" element={<Productpage />} />
           <Route path="/Collection" element={<Collectionpage/>}/>



    </Routes>
   </Router>
   
  );
}

export default App;
