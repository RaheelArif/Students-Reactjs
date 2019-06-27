import React, { Component } from 'react';
import "./App.css";
import Header from './component/Header';
import {BrowserRouter , Route } from "react-router-dom"
import  Books from "./component/books"
import Cosmatics from './component/cosmatics';
import Foods from './component/foods';
import Drinks from './component/Drinks';
import Home from "./component/home"

class App extends Component {


  

  render() {



    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/"  component={Home} />
        <Route path="/foods" component={Foods} />
        <Route path="/books" component={Books} />
        <Route path="/cosmatics" component={Cosmatics} />
        <Route path="/drinks" component={Drinks} />
        

     
      </BrowserRouter>
    )
  }
}


export default App;