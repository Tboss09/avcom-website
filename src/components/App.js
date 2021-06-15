import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Application from './Application/Application'
import Footer from './Home/Footer/Footer'
import Header from './Home/Header/Header'
import HeaderContact from './Home/Header/HeaderContact'
import Nav from './Home/Header/Nav'
import Main from './Home/Main/Main'
import Products from './Product/Products'
const App = () => {
 return (
  <>
   <header>
    <HeaderContact />
    <Nav />
   </header>
   <Switch>
    <Route exact path="/">
     <Header />
     <Main />
    </Route>
    <Route path="/products">
     <Products />
    </Route>

    <Route path="/applications">
     <Application />
    </Route>
   </Switch>
   <Footer />
  </>
 )
}

export default App
