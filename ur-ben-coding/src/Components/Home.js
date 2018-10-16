import React, {Component} from 'react';

class Home extends Component{
    state ={
        post: "Hi my name is Ben"
    }

    render(){
        return(
            <div className="home-page">
                <h4 className="homepage">{this.state.post}</h4>
            </div>
        )
    }
}

export default Home;