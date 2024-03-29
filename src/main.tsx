import React from 'react'
import ReactDOM from 'react-dom/client'

// eslint-disable-next-line import/no-unresolved
import App from './App'
import './index.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
