import React, { Component } from 'react'
import {Grid, Col, Image, Row } from 'react-bootstrap'
import './Skills.css'
import API from "../../utils/API";

export default class Skills extends Component {
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
        	aboutbioImgae:data.about[0].bioImg,
		   	aboutName: data.about[0].name,
		    aboutBio: data.about[0].bio,
        })
    })
      .catch(err => console.log(err));
  };

render() {
  return (
	<div class="skills">
      <div className="container containerSkills">
	    <Row className="skillsHeader">
	      <Col md={12}>
		    <div class="offerTitle">
			  Skills Summary
			</div>
		  </Col>
		</Row>
		<Row className="skillsColumnHeader">
		  <Col md={6}>
		    <h3 class="skillCategory">Technical Skills</h3>
		  </Col>
		  <Col md={6}>
			<h3 class="skillCategory">Soft Skills</h3>
		  </Col>
		</Row>
		<Row className="skillsList">
		  <Col md={3}>
		    <ul>
			  <li>MongoDB</li>
			  <li>Express</li>
			  <li>React</li>
			  <li>Node.js</li>
			  <li>MySQL</li>
			  <li>mongoose</li>
		      <li>sequelize</li>
            </ul>
		  </Col>
		  <Col md={3}>
		    <ul>
			  <li>JavaScript</li>
			  <li>jQuery </li>
			  <li>AJAX </li>
			  <li>HTML </li>
			  <li>CSS </li>
			  <li>Bootstrap </li>
			  <li>Data Modeling </li>
			</ul>
		  </Col>
		  <Col md={3}>
		    <ul>
		      <li>Communication</li>
			  <li>Flexibility</li>
			  <li>Adaptablility</li>
			  <li>Leadership</li>			
			  <li>Teamwork</li>			
			  <li>Creativity</li>			
			</ul>
		  </Col>
		  <Col md={3}>
			<ul>
			  <li>Full SDLC</li>
			  <li>Analysis </li>
			  <li>Problem Solving </li>
			  <li>Collaboration </li>
			  <li>Project Management </li>
			</ul>
		  </Col>
		</Row>
		  <Col md={12}>
		    <h3 class="aboutPortfolio">About the Portfolio</h3>
		    <p>This portfolio page is build on the MERN stack. Biography information, project details and registerd contacts are stored in MongoDB, with the system written in JavaScript utilizing Express, React and Node.js. Access to the Administration page is secured using Firebase authentication. The site is currently deployed to Heroku. For more information please click the Portfolio project tile below. </p>
		  </Col>
	  </div>
	</div>
    )
  }
} 