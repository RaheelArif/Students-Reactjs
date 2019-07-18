import React, { Component } from 'react';
import "./App.css";
import Header from './component/Header';
import { BrowserRouter, Route } from "react-router-dom"
import Books from "./component/books"
import Cosmatics from './component/cosmatics';
import Foods from './component/foods';
import Drinks from './component/Drinks';
import Home from "./component/home"
import Material from "./component/material"
class App extends Component {
  state = {
    name: ""
  }

  abc = (a) => {
    this.setState({
      name: a
    })
  }

  render() {



    return (
      <BrowserRouter>
      <Material />
        <Header xyz={(a) => { this.abc(a) }} />
        <h1 className="abc">{this.state.name}</h1>
        <Route exact path="/" component={Home} />
        <Route path="/foods" component={Foods} />
        <Route path="/books" component={Books} />
        <Route path="/cosmatics" component={Cosmatics} />
        <Route path="/drinks" component={Drinks} />



      </BrowserRouter>
    )
  }
}



export default App;