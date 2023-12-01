import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { MenuProvider } from './context/MenuContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <MenuProvider>
    <App />
  </MenuProvider>
)
