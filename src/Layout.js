// src/Layout.js

import React from 'react';
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component

import './Layout.css';



const Layout = ({ children }) => {
  return (
    <div className='layout-container'>
      <header>
        <Header />
      </header>

      
      <main>
        {children}
      </main>


      <footer>
    <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
