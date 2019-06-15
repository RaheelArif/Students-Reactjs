import React, { Component } from 'react';
import "./App.css"
import Age  from "./component/Age"
class App extends Component {
  state = [
    { name: "ali", age: 26 },
    { name: "asghar", age: 27 },
    { name: "asif", age: 28 },
    { name: "ahmed", age: 29 },
    { name: "waqas", age: 20 },
    { name: "ali", age: 26 },
    { name: "asghar", age: 27 },
    { name: "asif", age: 28 },
    { name: "ahmed", age: 29 },
    { name: "waqas", age: 20 },
    { name: "ali", age: 26 },
    { name: "asghar", age: 27 },
    { name: "asif", age: 28 },
    { name: "ahmed", age: 29 },
    { name: "waqas", age: 20 },
    { name: "ali", age: 26 },
    { name: "asghar", age: 27 },
    { name: "asif", age: 28 },
    { name: "ahmed", age: 29 },
    { name: "waqas", age: 20 },
    { name: "ali", age: 26 },
    { name: "asghar", age: 27 },
    { name: "asif", age: 28 },
    { name: "ahmed", age: 29 },
    { name: "waqas", age: 20 },

  ]
  render() {
    var b = 0;
    return (
     <div>
        <h1>HP Super Market</h1>
        {
          this.state.map(function (item) {
            return (
              <div>
                <div className="name" >your NAME is = {item.name} </div>
                <Age />
              </div>
            )
          })
        }
    </div>
    )
  }
}


export default App;