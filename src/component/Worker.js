import React, { Component } from "react";

class Worker extends Component {
    render() {
     
        return (
            <div className="workers-area">
                <h1>our qualified workers</h1>
                {
                    this.props.workers.map(item => {
                        return (
                            <div className="workers" key={item.id}>
                                <span className="w-name">name :  {item.name}</span>
                                <span className="w-age">age :  {item.age}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Worker;