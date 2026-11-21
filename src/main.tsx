import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import lottie from 'lottie-web'
import { defineElement } from 'lord-icon-element'

defineElement(lottie.loadAnimation)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
