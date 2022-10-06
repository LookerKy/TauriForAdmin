import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import ManagePage from './pages/Manage';

function App() {

    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/manage" />} />
            <Route path="/manage" element={<ManagePage />} />
        </Routes>
    );
}

export default App;