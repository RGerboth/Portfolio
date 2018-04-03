import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Admin from './components/Admin/Admin.js';


class App extends Component {
  render() {
    return (
      <Router>
      	<div>
	        <Route exact path="/" component = {Home} />
	        <Route exact path="/Admin" component = {Admin} />
        </div>
      </Router>
    );
  };
};

export default App;
