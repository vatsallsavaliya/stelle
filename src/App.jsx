import React from 'react';
import Navbar from './components/navbar/navbar';
import Cursor from './components/Cursor/Cursor';
import Hero from './components/Hero/Hero';
import './styles/global.scss';
import './App.css'; // Keep your existing App CSS if you have other styles

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;