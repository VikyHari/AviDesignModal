import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId ="901099047226-qlgct798u7r1kgf5u9picj2ocghhg6oc.apps.googleusercontent.com"

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <GoogleOAuthProvider clientId={clientId}>
    <App />
  </GoogleOAuthProvider>,
  </StrictMode>,
)
