import React,{Component} from "react";
import "../App.css";
import img from "../images/front_end.jpg";
class Books extends Component{
    render(){
        return(
            <div>
       <h1>material ui</h1>
       <h1>react starp</h1>
       <h1>react bootstrap</h1>
       <h1>ant design</h1>
              <img src={img} alt="kajhs" />

            </div>
        )
    }
}
export default Books;