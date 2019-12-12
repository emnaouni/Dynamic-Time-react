import React from 'react';
import './App.css';
import Timer from './component/Timer';
 const time=6300000;
function App() {
  return (
   <Timer data={time}/>
  );
}

export default App;
