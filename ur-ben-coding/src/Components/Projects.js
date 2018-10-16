import React, { Component } from 'react';

class Projects extends Component{
    state = {
        title: "IoT : Project 1",
        projectBody: "A temperature & Humidity Sensor"
    }
    render() {
        return(
            <div className="post card container">
                    <div className="card-content center">
                        <span className="card-title black-text">{this.state.title}</span>
                            <p>{this.state.projectBody}</p>
                    </div>
            </div>
        )
    }
}

export default Projects;