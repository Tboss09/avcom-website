import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Home/Header/Header'
import HeaderContact from './Home/Header/HeaderContact'
import Nav from './Home/Header/Nav'
import Main from './Home/Main/Main'
const App = () => {
 return (
  <>
   <HeaderContact />
   <Nav />
   <Switch>
    <Route path="/333">kdkdk</Route>

    <Route path="/">
     <Header />
     <Main />
    </Route>
   </Switch>
  </>
 )
}

export default App
