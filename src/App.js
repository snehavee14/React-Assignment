import React from 'react';
import logo from './logo.svg';
import './App.css';
import AssignmentOne from './Components/AssignmentOne'
import AssignmentTwo from './Components/AssignmentTwo'
import AssignmentThree from './Components/AssignmentThree'
import AssignmentFour from './Components/AssignmentFour';

function App() {
  return (
    <div className="App">
      <AssignmentOne></AssignmentOne><br/>
      <AssignmentTwo></AssignmentTwo><br/>
      <AssignmentThree></AssignmentThree><br/>
      <AssignmentFour></AssignmentFour>
    </div>
  );
}

export default App;
