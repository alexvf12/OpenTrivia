import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './navbar.css'
// TODO #13
// Afegeix un altre `import` perquè també es carreguin els estils (ja proporcionats en un arxiu .css) per la barra de navegació.
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
