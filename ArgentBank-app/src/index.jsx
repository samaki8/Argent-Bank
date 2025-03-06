import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/main.css'
import App from './src/app/App.jsx'
import reportWebVitals from './reportWebVitals'
import store from './src/store/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

      <App />
    </Provider>
  </StrictMode>,
)
reportWebVitals();