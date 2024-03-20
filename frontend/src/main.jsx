import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { ClerkProvider } from '@clerk/clerk-react';


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
console.log(PublicKeyCredential)
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
   <ThemeProvider>
  <App />
  </ThemeProvider>
  </ClerkProvider>

 
   
  </React.StrictMode>,
)
