import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './HomePage/Header/Header'
import Main from './HomePage/Main/Main'
const App = () => {
 return (
  <>
   <Switch>
    <Route exact path="/">
     <Header />
     <Main />
    </Route>
   </Switch>
  </>
 )
}

export default App
