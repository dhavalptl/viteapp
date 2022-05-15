import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Start mocking msw server to mock request
if (process.env.NODE_ENV === 'mock') {
  const { worker } = await import('./mocks/browser')
  worker.start()
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
