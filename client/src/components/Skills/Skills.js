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
							<div class="skillTitle">
								Services
							</div>
					</Col>
					<Col md={12}>
							<div class="offerTitle">
								What I Can Offer
							</div>
					</Col>
						<Col md={3} className="skillsTexts">
							
							<h1>BackEnd</h1>
							<h3>Node.js</h3>
							<ul>
								<li>Express.js</li>
								<li>User Authentication</li>
								<li>MERN Stack</li>				
							</ul>
							<h3>Databases</h3>
							<ul>
								<li>MySQL</li>
								<li>Mongo</li>
								<li>Sequelize</li>
								<li>Mongoose</li>				
							</ul>
						</Col>
						<Col md={3} className="skillsTexts">
							
							<h1>FrontEnd</h1>
							<h4></h4>
							<ul>
								<li>Express.js</li>
								<li>User Authentication</li>
								<li>MERN Stack</li>				
							</ul>
							<h1>Databases</h1>
							<ul>
								<li>MySQL</li>
								<li>Mongo</li>
								<li>Sequelize</li>
								<li>Mongoose</li>				
							</ul>
						</Col>
						<Col md={3} className="skillsTexts">
							
							<h3>{this.state.aboutName}</h3>
							<p>{this.state.aboutBio}</p>
							<p>						
								Suas omnium eu mel. Veri libris vix in, his indoctum definitiones ex, ubique corpora duo ex. Cum error lobortis at, nemore laboramus mei id. Putant inimicus id sit. Habeo mandamus reprimique sed ei, consul volumus corrumpit cum in.

								Tollit veritus invidunt his te, mei ea suas graeco. Quando euismod id mealosophia ius. Usu postea admodum expetendis te. Movet euismod vocibus vix ut. Mea ad nostro voluptua nominati, vix ceteros fastidii eloquentiam ut, quis ornatus eos et. Elitr facete aliquam ad his, alii errem eum cu. Ut dignissim argumentum duo, te facilisi assueverit sadipscing per. Ubique tamquam incorrupte his an.
							</p>
						</Col>
						<Col md={3} className="skillsTexts">
							
							<h3>{this.state.aboutName}</h3>
							<p>{this.state.aboutBio}</p>
							<p>						
								Suas omnium eu mel. Veri libris vix in, his indoctum definitiones ex, ubique corpora duo ex. Cum error lobortis at, nemore laboramus mei id. Putant inimicus id sit. Habeo mandamus reprimique sed ei, consul volumus corrumpit cum in.

								Tollit veritus invidunt his te, mei ea suas graeco. Quando euismod id mea, mel ne omnis vituperatorendis te. Movet euismod vocibus vix ut. Mea ad nostro voluptua nominati, vix ceteros fastidii eloquentiam ut, quis ornatus eos et. Elitr facete aliquam ad his, alii errem eum cu. Ut dignissim argumentum duo, te facilisi assueverit sadipscing per. Ubique tamquam incorrupte his an.
							</p>
						</Col>
				</div>
			</div>
		)
	}
} 