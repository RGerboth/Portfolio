import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';
import ReactDOM from "react-dom"
import About from '../About';
import scrollToElement from 'scroll-to-element';


export default class CustomNavbar extends Component {


modalClick = (event) => {
	event.preventDefault();
	document.getElementById("sidebar-wrapper").classList.toggle("active");
	//document.getElementsByClassName(".menu-toggle > .fa-bars, .menu-toggle > .fa-times")[0].classList.toggle("fa-bars fa-times");
	document.getElementsByClassName("menu-toggle")[0].classList.toggle("active");

}

// scroll = (event) => {
// 	const tesNode = ReactDOM.findDOMNode(this.About)
// 	console.log(tesNode)
// 	  // if (some_logic){
// 	  window.scrollTo(0, tesNode);
// 	  // }


// 	// document.getElementById('aboutInfo').scrollIntoView();
// }


scroll = (event) => {
	let element = event.target.id;
	
	scrollToElement("." + element);
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
		          <a class="js-scroll-trigger" id="home" onClick={this.scroll}></a>
		        </li>
		        <li class="sidebar-nav-item">
		          <a class="js-scroll-trigger" id="home" onClick={this.scroll}>Home</a>
		        </li>
		        <li class="sidebar-nav-item">
		          <a class="js-scroll-trigger" id="bio" onClick={this.scroll}>Bio</a>
		        </li>
		        <li class="sidebar-nav-item">
		          <a class="js-scroll-trigger" id="skills" onClick={this.scroll}>Skills</a>
		        </li>
		        <li class="sidebar-nav-item">
		          <a class="js-scroll-trigger" id="portfolio" onClick={this.scroll}>Projects</a>
		        </li>
		        <li class="sidebar-nav-item">
		          <a class="js-scroll-trigger" id="contact" onClick={this.scroll}>Contact</a>
		        </li>
		      </ul>
		    </nav>

		</div>
		)
	}
} 