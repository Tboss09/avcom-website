import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './HomePage/Header/Header'
const App = () => {
 return (
  <>
   <Switch>
    <Route exact path="/">
     <Header />
    </Route>
   </Switch>
  </>
 )
}

export default App
