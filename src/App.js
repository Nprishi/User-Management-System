// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';
import ViewUser from './pages/ViewUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="/user/view/:userId" element={<ViewUser />} />
        <Route path="/user/update/:userId" element={<EditUser />} />
      </Routes>
    </Router>
  );
}

export default App;
