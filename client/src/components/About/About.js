import React, { Component } from 'react'
import {Grid, Col, Image } from 'react-bootstrap'
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
				<div className="container containerAbout">
					<Col md={12}>
						<div>
							<h2 class="aboutTitle">{this.state.aboutWelcome}</h2>
						</div>
					</Col>
					<Col md={8} mdOffset={2}>
						<Image src = {this.state.aboutbioImage} className = 'about-profile-pic' rounded/>
						<p className= "bioContent">{this.state.aboutBio}</p>
					</Col>
				</div>
			</div>
		)
	}
} 