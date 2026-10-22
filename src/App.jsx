import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AnimatedRoutes from './components/AnimatedRoutes';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <Router>
      <div className="bg-[#F0EEE8] min-h-screen text-[#24231F] flex flex-col selection:bg-[#24231F] selection:text-[#F0EEE8]">
        <CustomCursor />
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

