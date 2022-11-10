import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Context from './Pages/Context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
)
