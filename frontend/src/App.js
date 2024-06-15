import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container mx-auto mt-5">
        {/* Your main application content goes here */}
        <h1 className="text-2xl font-bold">Welcome to My Application</h1>
        <p>This is the main content area of your application.</p>
      </main>
    </div>
  );
}

export default App;

