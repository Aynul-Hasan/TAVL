import React from "react"
import Navber from "./component/Navbar"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import './App.css';
import Home from './component/pages/Home';
import Service from './component/pages/Services';
import Products from './component/pages/Products';
import SignUp from './component/pages/SignUp';
import Login from './component/pages/Login'
import Footer from "./component/Footer";

function App() {
  return (
    <>
       <Router>
       <Navber/>
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/service" exact component={Service} />
         <Route path="/products" exact component={Products} />
         <Route path="/sign-up" exact component={SignUp} />
         <Route path="/login" exact component={Login} />

       </Switch>
       <Footer/>
       </Router>

    </>
  );
}

export default App;
