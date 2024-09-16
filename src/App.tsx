import React from 'react';
// import './App.css';
import Labs from "./Labs";
import Kanbas from './Kanbas';
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  return (
   <HashRouter>
    <div>
     <Routes>
      {/* Default navigation to Kanbas */}
      <Route path="/" element={<Navigate to="Kanbas"/>}/>
      <Route path="/Labs/*" element={<Labs />} />
      <Route path="/Kanbas/*" element={<Kanbas />} />
     </Routes>
    </div>
   </HashRouter>
 );
}
