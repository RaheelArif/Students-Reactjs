import React, { Component } from "react";
import "../App.css";

class Foods extends Component {
    state = {
        userName: "ali",
        firstName: "asif",
        lastName: "arif"
    }


    handleChange = (e) => {
     this.setState({

         [e.target.name] : e.target.value 
     })
    }


    
  
    render() {
        return (
            <div>
                <h1 >our menu</h1>
                <input name="userName" onChange={this.handleChange} type="text" />
                <input name="lastName" onChange={this.handleChange} type="text" />
                <input name="firstName" onChange={this.handleChange} type="text" />
                <button onClick={this.addItem}>new name</button>
                <h1>user name: {this.state.userName}</h1>
                <h1>last name: {this.state.lastName}</h1>
                <h1>first name: {this.state.firstName}</h1>
                {/* {
                    this.state.map(item => {
                        return (
                            <div className="menu-area" key={item.id}>
                                <h1 className="menu">{item.foodName}</h1>
                            </div>
                        )
                    })
                } */}

            </div>
        )
    }
}
export default Foods;
