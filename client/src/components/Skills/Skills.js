import React, { Component } from 'react'
import {Grid, Col, Image } from 'react-bootstrap'
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
					<Col md={12}>
							<div class="offerTitle">
								Skills Summary
							</div>
					</Col>
						<Col md={3}>
							<h3 class="skillCategory">FrontEnd</h3>
							<h4></h4>
							<ul>
								<li>Express.js</li>
								<li>User Authentication</li>
								<li>MERN Stack</li>				
							</ul>
						</Col>
						<Col md={3}>
							<h3 class="skillCategory">BackEnd</h3>
							<ul>
								<li>Node.js</li>
								<li>Express.js</li>
								<li>User Authentication</li>
								<li>MERN Stack</li>				
							</ul>
						</Col>
						<Col md={3}>
							<h3 class="skillCategory">Databases</h3>
							<ul>
								<li>MySQL</li>
								<li>Mongo</li>
								<li>Sequelize</li>
								<li>Mongoose</li>				
							</ul>
						</Col>
						<Col md={3}>
							<h3 class="skillCategory">Databases</h3>
							<ul>
								<li>MySQL</li>
								<li>Mongo</li>
								<li>Sequelize</li>
								<li>Mongoose</li>				
							</ul>
						</Col>
				</div>
			</div>
		)
	}
} 