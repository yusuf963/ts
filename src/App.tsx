import React from 'react';
import { User } from './User'
import './App.css';


function App() {
  const data = {
    firstName: 'John',
    invoice: [
      { id: 1, lastName: 'Doe', age: 30, married: true },
      { id: 2, lastName: 'Doa', age: 39, married: false }
    ]
  }
  return (
    <div className="App">
      <User apiData={data} />
    </div>
  );
}

export default App;
