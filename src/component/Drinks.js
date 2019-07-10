import React, { Component } from "react";
import "../App.css";
import Foods from "./foods"

class Drinks extends Component {
    state = {
        itemName: undefined,
        itemPrice: undefined,
        Item: [
            { itemName: "coca cola", itemPrice: "30" },
        ],
        showForm: 0
    }
    handleChange = (e) => {
        this.setState({

            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        let newItem = {
            itemName: this.state.itemName,
            itemPrice: this.state.itemPrice
        }
        this.setState({
            Item: [...this.state.Item, newItem],
            itemName: "",
            itemPrice: "",
            showForm : 0
        })
    }

    showForm = () => {
        this.setState({
            showForm: 1
        })
    }

    render() {
        return (
            <div>
                <h1 >this is  Drinks area</h1>
                <table border="5">
                    <tr>
                        <th>drink name</th>
                        <th>drink price</th>
                    </tr>
                    {
                        this.state.Item.map(data => {
                            return (
                                <tr>
                                    <td>{data.itemName}</td>
                                    <td>{data.itemPrice}</td>
                                </tr>
                            )
                        })
                    }
                </table>
                {
                    this.state.showForm === 0 ?
                        (null) :
                        (
                            <div>
                                <input onChange={this.handleChange} value={this.state.itemName} type="text" name="itemName" placeholder="driink name" />
                                <input onChange={this.handleChange} value={this.state.itemPrice} type="text" name="itemPrice" placeholder="driink price" />
                                <button onClick={this.handleClick}>add</button>
                            </div>
                        )
                }

                <button onClick={this.showForm}>add new item</button>
            </div>
        )
    }
}
export default Drinks;