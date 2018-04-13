import React, { Component } from 'react';
import {Grid, Col, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Footer.css';
import API from "../../utils/API";
import Firebase from '../../firebase.js';

let database = Firebase.database();
const auth = Firebase.auth();

export default class About extends Component {

state = {
	userName: "",
	Password: ""
}

handleInputChange = event => {
	const { name, value } = event.target;
	this.setState({
		[name]: value
	});
}

handleLoginSubmit = event => {
	event.preventDefault();
	console.log(`Login Submit`);
	database.ref().push({
	  username: this.state.userName
	});

	const promise = auth.signInWithEmailAndPassword(this.state.userName, this.state.Password);

	promise.then(() => {
		auth.onAuthStateChanged(firebaseUser => {
		  if (firebaseUser) {
		  	console.log(`Authorized User`);
		    window.location = "/Admin";
		  } else {
		  	console.log(`Not Authorized User`);
		    // window.location = "/";
		  }
		})
	})
	
	promise.catch(err => console.log(err.message));
}

handleSignup = event => {
	event.prevenDefault();
	console.log(`Login Submit`);
	database.ref().push({
	  username: this.state.userName
	});

	const promise = auth.createUserWithEmailAndPassword(this.state.userName, this.state.Password);
	// const promise = auth.createUserWithEmailAndPassword("aagiideegii@gmail.com", 840118);

	promise.catch(err => console.log(err.message));

	auth.onAuthStateChanged(firebaseUser => {
	  if (firebaseUser) {
	  	console.log(`Authorized User`);
	    window.location = "/Admin";
	  } else {
	  	console.log(`Not Authorized User`);
	    // window.location = "/";
	  }
	});
}

openModal = event => {
	//toggles the modal on
      var buttonId = event.target.id;
      document.getElementById("modal-container-footer").removeAttribute("class");
      document.getElementById("modal-container-footer").classList.add(buttonId);
      document.getElementsByTagName("body")[2].classList.add('modal-active');
}


closeModal = event => {
      
      document.getElementById("modal-container-footer").classList.add("out");
      document.getElementsByTagName("body")[2].removeAttribute('modal-active');
  }

preventModalClose = (event) => {
    event.stopPropagation();
}

render() {
	return (
		<body>
				<div id="modal-container-footer" onClick = {this.closeModal}>
	              <div class="modal-background-footer" >
	                <div class="modal-footer" onClick = {this.preventModalClose}>
	                  
						<form id="footer">
						    <p class="h4 text-center mb-4">Sign in</p>
						    <label for="defaultFormLoginEmailEx" class="grey-text">Your email</label>
						    <input 
						    	type="email" 
						    	id="defaultFormLoginEmailEx" 
						    	onChange={this.handleInputChange} 
						    	class="form-control" 
						    	value={this.state.userName} 
						    	name="userName"
						    />

						    <br/>

						    <label for="defaultFormLoginPasswordEx" class="grey-text">Your password</label>
						    <input 
						    	type="password" 
						    	id="defaultFormLoginPasswordEx" 
						    	class="form-control" 
						    	onChange={this.handleInputChange}
						    	value={this.state.Password} 
						    	name="Password"
						    />

						    <div class="text-center mt-4">
						        <button id="anchorBtn" class="btn btn-indigo" type="submit" onClick={this.handleLoginSubmit}>Login</button>
						        <button id="anchorBtn" class="btn btn-indigo" type="submit" onClick={this.handleSignUp}>Sign Up</button>
						    </div>
						</form>
	                </div>
	              </div>
	            </div>
            
			<footer>
				{/*Copyright 2018 - Robert P Gerboth
				<br />*/}
      			<a id="two" class="buttonFooter" onClick = {this.openModal}>Admin </a>
			</footer>
		</body>

	)
}

};

