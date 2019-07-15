import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux"

class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1 >this is home page</h1>
                {this.props.Teacher.teacher.map(item => {
                    return (
                        <div>
                            <h1> your name is : {item.name}</h1>
                            <h1>your age is : {item.age}</h1>

                        </div>
                    )
                })}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, at? Unde, voluptatum veritatis? Magnam ipsum ipsa molestiae, nam eaque cumque debitis commodi omnis aperiam saepe quia, nemo amet cupiditate sapiente!</p>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        Teacher: state.TeacherReducer,
        
    }
}
export default connect(mapStateToProps)(Home);