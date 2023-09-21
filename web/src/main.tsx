import React from 'react'
import ReactDOM from 'react-dom/client'

import DefaultProviders from './app/providers/default-providers'
import App from './app'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DefaultProviders>
      <App />
    </DefaultProviders>
  </React.StrictMode>
)
