import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/Hero/Hero';
import HomeIntro from './components/HomeIntro/HomeIntro'; // Newly added import
import './styles/global.scss';
import './App.css'; // Keep your existing App CSS if you have other styles

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomeIntro /> {/* The new editorial section */}
      </main>
    </>
  );
}

export default App;