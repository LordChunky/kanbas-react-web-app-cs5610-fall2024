import React from 'react';
// import './App.css';
import Labs from "./Labs";
import Kanbas from './Kanbas';
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Kanbas/store';

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
        <Routes>
          {/* Default navigation to Kanbas */}
          <Route path="/" element={<Navigate to="Kanbas/Dashboard"/>}/>
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
        </div>
      </HashRouter>
    </Provider>
 );
}
