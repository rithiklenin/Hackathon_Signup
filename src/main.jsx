import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SchoolPage from './SchoolPage.jsx'
import YearPage from './YearPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <YearPage />
  </StrictMode>,
)
