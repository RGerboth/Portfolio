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
		      This portfolio page is implemented with the MERN stack. Biography information, project information and registered contacts are stored in MongoDB. The page and server are written in JavaScript using Express.js, React and Node.js. Once deployed, biography information, links and images can be updated using the Administration page, access to which is restricted using Firebase for authentication. Projects are also added, modified and removed via the Administration page and all registered conacts can be viewed and deleted there. For more information, please click on the Portfolio tile in the Projects section below. 
		    </p>
		  </Col>
		</Row> 
	  </div>
	)
  }
} 