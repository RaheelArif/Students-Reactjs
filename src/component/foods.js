import React, { Component } from "react";
import "../App.css";

class Foods extends Component {
    state = {
        firstName: undefined,
        lastName: undefined,
        student: [
            { firstName: "ali", lastName: "asif" }

        ]
    }
handleChange =(e) => {
    this.setState({
     [e.target.name]: e.target.value ,
    })
}

addItem = (e) => {
this.props.new("abc")

}




    render() {
        return (
            <div>
                <h1 >our menu</h1>
                <input name="firstName" onChange={this.handleChange} type="text" />
                <input name="lastName" onChange={this.handleChange} type="text" />
                <button onClick={this.addItem}>new name</button>
                <h1>{this.state.firstName}</h1>
                {
                    this.state.student.map(item => {
                        return (
                            <div className="menu-area">
                                <h1 className="menu">{item.firstName} </h1>
                                <h1 className="menu"> : {item.lastName}</h1>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
export default Foods;
