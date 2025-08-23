import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;