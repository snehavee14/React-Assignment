import React from 'react';
import logo from './logo.svg';
import './App.css';
import AssignmentOne from './Components/AssignmentOne'
import AssignmentTwo from './Components/AssignmentTwo'
import AssignmentThree from './Components/AssignmentThree'
import AssignmentFour from './Components/AssignmentFour';
import AssignmentFive from './Components/AssignmentFive';
import AssignmentSix from './Components/AssignmentSix';


function App() {
  return (
    <div className="App">
     <AssignmentOne></AssignmentOne><br/>
      <AssignmentTwo></AssignmentTwo><br/>
      <AssignmentThree></AssignmentThree><br/>
      <AssignmentFour></AssignmentFour>
      {/* <AssignmentFive></AssignmentFive> */}
      <AssignmentSix></AssignmentSix>


    </div>

    
  );
}

export default App;
