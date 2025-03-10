//ArgentBank-app\src\index.jsx
//import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/main.css'
import App from './app'
//import reportWebVitals from './reportWebVitals'
import Store from './src/store/store.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>

    <StrictMode>


      <App />

    </StrictMode>,
  </Provider>
)
//reportWebVitals();