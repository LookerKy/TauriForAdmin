import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ManagePage from './pages/manage';
import RegisterPage from './pages/register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/manage" />} />
      <Route path="/manage" element={<ManagePage />} />
      <Route path="/register" element={<RegisterPage />}></Route>
    </Routes>
  );
}

export default App;
