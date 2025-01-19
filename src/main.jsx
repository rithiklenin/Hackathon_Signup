import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import SchoolPage from './SchoolPage.jsx';
import Birthday from './Birthday.jsx';
import Major from './Major.jsx';
import Skills from './Skills.jsx';
import Interest from './Interest.jsx';
import Experience from './Experience.jsx';
import Confirm from './Confirm.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/school" element={<SchoolPage />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/major" element= {<Major />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
