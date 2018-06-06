import React, { Component } from 'react'
import {Grid, Col, Image, Row } from 'react-bootstrap'
import './About.css'
import API from "../../utils/API";

export default class About extends Component {
	state = {
    aboutbioImage:"",
   	aboutName: "",
    aboutBio: "",
  	};

  componentDidMount() {
    this.loadPage();
  }

  loadPage = () => {
  	console.log("loadpage")
    API.getAll()
      .then(res =>{
      	console.log(res.data)
      	const data = res.data
        this.setState({ 
        	aboutbioImage:data.about[0].bioImg,
		   	aboutName: data.about[0].name,
		    aboutBio: data.about[0].bio,
		    aboutWelcome: data.about[0].message
        })
        console.log(this.state.aboutbioImage)
    })
      .catch(err => console.log(err));
  };

  render() {
    return (
	  <div className="bio" id="aboutInfo">
	    <Row>
	      <div className="container containerAbout">
		    <Col md={12}>
			  <div>
				<h2 class="aboutTitle">{this.state.aboutWelcome}</h2>
			  </div>
			</Col>
		  </div>
		</Row>
		<Row>
		  <Col md={8} mdOffset={2}>
			<Image src = {this.state.aboutbioImage} className = 'about-profile-pic' rounded/>
			<p className= "bioContent">{this.state.aboutBio}</p>
		  </Col>
		</Row>
		<Row>
		  <Col md={8} mdOffset={2} className="aboutPortfolio">
		    <p class="aboutPortfolioHeader">About this Portfolio</p>
		  </Col>
		</Row>
		<Row>
		  <Col md={8} mdOffset={2}>
		    <p class="aboutPortfolioText">
		      This portfolio page is supported by a custom-built, lightweight content management system implemented with the MERN stack. Biography and project information are stored in MongoDB as are new contacts. This content can be updated using the Administration page without the need to re-deploy the site. Access to the content management system is restricted using Firebase for authentication. The page and server are written in JavaScript using Express.js, React and Node.js.  
		    </p>
		  </Col>
		</Row> 
	  </div>
	)
  }
} 