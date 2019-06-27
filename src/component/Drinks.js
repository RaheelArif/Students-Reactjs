import React,{Component} from "react";
import "../App.css";
import Foods from "./foods"

class Drinks extends Component{
    render(){
        return(
            <div>
                <h1 >this is  Drinks area</h1>
               <Foods />
            </div>
        )
    }
}
export default Drinks;