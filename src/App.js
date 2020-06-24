import React from 'react';
import './App.css';
import landingPage from './components/landingpage';
import about from './components/about';
import projects from './components/projects';
import photography from './components/photography'
import contact from './components/contact'


function App() {
  return (
    <div className="App">
      {landingPage()}
      {about()}
      {projects()}
      {/* {photography()} */}
      {contact()}
    </div>
  );
}

export default App;
