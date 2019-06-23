import React, { Component } from 'react';
import "./App.css";
import Header from './component/Header';
import {BrowserRouter , Route } from "react-router-dom"
import  Books from "./component/books"
import Cosmatics from './component/cosmatics';
import Foods from './component/foods';
import Drinks from './component/drinks';

class App extends Component {


  

  render() {



    return (
      <BrowserRouter>
        <Header />
        <Route path="/foods" component={Foods} />
        <Route path="/books" component={Books} />
        <Route path="/cosmatics" component={Cosmatics} />
        <Route path="/drinks" component={Drinks} />
        

     
      </BrowserRouter>
    )
  }
}


export default App;