import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/scss/style.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  {/* monte/demonte et remonte l'app => 2x console log */}
    <App />
  </React.StrictMode>,
)
 