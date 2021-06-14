import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './Home/Footer/Footer'
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
     <Footer />
    </Route>
   </Switch>
  </>
 )
}

export default App
