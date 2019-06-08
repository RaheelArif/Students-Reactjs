import React , {Component} from 'react';
import Header from "./components/Header";
import "./App.css"
class App extends Component {
  state = {
    name : "ahmed",
    age: 24
  }
  render() {
    return (
      <div>
        <Header />
         <h1>your name is {this.state.name}</h1>
         <p>your age is {this.state.age}</p>
      </div>

    )
  }
}

export default App;