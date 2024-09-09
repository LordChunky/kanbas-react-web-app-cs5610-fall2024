import React from 'react';
import './App.css';
import Lab from "./Labs";

function App() {
  return (
    <div>
      <h1>Welcome to Web Dev</h1>
      {/* This 'Lab' tags is from the Lab.tsx file. 
      You can break down bigger component of the code and put it into 
      another .tsx file. From there you can import the new .tsx file
      into other .tsx file*/}
      <Lab/>
    </div>
  );
}

export default App;
