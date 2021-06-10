import React from 'react'
import ReactDOM from 'react-dom'

// internal FIles
import { BrowserRouter as Router } from 'react-router-dom'
// internal FIles
import './index.css'
import App from './components/App'

ReactDOM.render(
 <React.StrictMode>
  <Router>
   <App />
  </Router>
 </React.StrictMode>,
 document.getElementById('root')
)
