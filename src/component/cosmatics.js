import React,{Component} from "react";
import "../App.css";
import { connect } from "react-redux"

class Cosmatics extends Component{
    render(){
        return(
            <div>
               {this.props.Student.student.map(item => {
                    return (
                        <div>
                            <h1> your name is : {item.name}</h1>
                            <h1>your age is : {item.age}</h1>

                        </div>
                    )
                })}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        Student: state.StudentReducer
    }
}
export default connect(mapStateToProps)(Cosmatics);