import React, { Component } from 'react';
import "./App.css";
import Worker from "./component/Worker"
import Header from './component/Header';

class App extends Component {
  state = {
  worker: [ 
    { id: "1", name: "ali", age: 26 },
    { id: "2", name: "asghar", age: 27 },
    { id: "3", name: "asif", age: 28 },
    { id: "4", name: "ahmed", age: 29 },
    { id: "5", name: "waqas", age: 33 },
  ],


  }

  render() {



    return (
      <div>
        <Header />

        <Worker workers={this.state.worker} />
        

      </div>
    )
  }
}


export default App;