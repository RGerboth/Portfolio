import React, { Component } from 'react';
import {Grid, Col, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Footer.css';
import API from "../../utils/API";

export default class About extends Component {
	render() {
		return (
			
			<footer>
				This is the footer
				<br />
      
				<a href="/Admin">Admin</a>
				<Link to="/Admin">Admin</Link>

			</footer>
		)
	}
} 