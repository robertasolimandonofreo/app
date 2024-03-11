import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './app';
import Db from './db';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/db" element={<Db />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
