import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';
import ReactDOM from "react-dom"
import About from '../About';

export default class CustomNavbar extends Component {


modalClick = (event) => {
	event.preventDefault();
	document.getElementById("sidebar-wrapper").classList.toggle("active");
	//document.getElementsByClassName(".menu-toggle > .fa-bars, .menu-toggle > .fa-times")[0].classList.toggle("fa-bars fa-times");
	document.getElementsByClassName("menu-toggle")[0].classList.toggle("active");

}

scroll = (event) => {
	const tesNode = ReactDOM.findDOMNode(this.About)
	console.log(tesNode)
	  // if (some_logic){
	  window.scrollTo(0, tesNode);
	  // }


	// document.getElementById('aboutInfo').scrollIntoView();
}




	render() {
		return (
		<div>
		    <a class="menu-toggle rounded" onClick={this.modalClick} href="#">
		      <span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>
		    </a>
		    <nav id="sidebar-wrapper">
		      <ul class="sidebar-nav">
		        <li class="sidebar-brand">
		          <a class="js-scroll-trigger" onClick= {this.scroll} href="#page-top">Michael</a>
		        </li>
		        <li class="sidebar-nav-item">
		          <a class="js-scroll-trigger" href="#page-top">Home</a>
		        </li>
		        <li class="sidebar-nav-item">
		          <a class="js-scroll-trigger" onClick={this.scroll}href="#about">About</a>
		        </li>
		        <li class="sidebar-nav-item">
		          <a class="js-scroll-trigger" href="#services">Services</a>
		        </li>
		        <li class="sidebar-nav-item">
		          <a class="js-scroll-trigger" href="#portfolio">Portfolio</a>
		        </li>
		        <li class="sidebar-nav-item">
		          <a class="js-scroll-trigger" href="#contact">Contact</a>
		        </li>
		      </ul>
		    </nav>

		</div>
		)
	}
} 