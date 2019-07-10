import React,{Component} from "react";
import {Link} from "react-router-dom";
import "../App.css";

class Header extends Component{
    state={
        name : "react.js"
    }
  sendData=() => {

      this.props.xyz(this.state.name)
  }
    render(){
        return(
            <div className="header">
                <Link className="logo" to="/"><h1 >HP Super Market</h1></Link>  
                <div className="links-container">
                <Link className="links" to="/books">books</Link>
                <Link className="links" to="/foods">foods</Link>
                <Link className="links" to="/cosmatics">cosmatics</Link>
                <Link className="links" to="/workers">workers</Link>
                <Link className="links" to="/drinks">drinks</Link>
                </div>
                <button onClick={this.sendData}>send data to APp.js</button>
            </div>
        )
    }
}
export default Header;