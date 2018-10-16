import React, { Component } from 'react';
import Navbar from './Components/NavBar';
import {BrowserRouter, Route} from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Projects from './Components/Projects'


// Additional Render
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route path = '/about' component = {About} />
          <Route path = '/home' component = {Home} />
          <Route path = '/projects' component = {Projects}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;