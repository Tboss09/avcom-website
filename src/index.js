import React from 'react'
import ReactDOM from 'react-dom'

// internal FIles
import { BrowserRouter as Router } from 'react-router-dom'
// internal FIles
import './tailwindBase.css'
import './index.css'
import './tailwindOthers.css'

import App from './components/App'

ReactDOM.render(
 <React.StrictMode>
  <Router>
   <App />
  </Router>
 </React.StrictMode>,
 document.getElementById('root')
)
