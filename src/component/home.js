import React,{Component} from "react";
import "../App.css";
import {connect} from "react-redux"

class Home extends Component{
    render(){
        console.log(this.props.name)
        return(
            <div>
                <h1 >this is home page</h1>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, at? Unde, voluptatum veritatis? Magnam ipsum ipsa molestiae, nam eaque cumque debitis commodi omnis aperiam saepe quia, nemo amet cupiditate sapiente!</p>              
            </div>
        )
    }
}
const mapStateToProps= (state)=> {
   return {
   name : state.StudentReducer
   }
}
export default connect(mapStateToProps)(Home) ;