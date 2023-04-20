import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/sidebar/sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Maps.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';
// import SignIn from '../src/Components/auth/SignIn';
// import SignUp from '../src/Components/auth/SignUp';
import SignIn from './pages/Sign.jsx';
import AuthDetails from './AuthDetails';

const App = () => {
  return (
    <BrowserRouter>
    {/* <SignIn/> */}
    {/* <SignUp/> */}
    <AuthDetails/>
      <Sidebar>
        <Routes>
          
          <Route path="/" element={<Dashboard />} />
          <Route path="/Signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
          {/* <Route path="/" element={<SignIn />} /> */}

        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;