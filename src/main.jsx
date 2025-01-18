import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SchoolPage from './SchoolPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SchoolPage />
  </StrictMode>,
)
