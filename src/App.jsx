import * as React from 'react';
import './App.scss';
import Projects from './pages/projects/project.jsx'
import Home from './pages/home/home.jsx'

function App() {
  return (
    <div className="app">
      <div className="sections">
        <Home/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
