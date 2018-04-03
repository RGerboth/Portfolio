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
        	aboutbioImage:data.about[0].bioImage,
		   	aboutName: data.about[0].name,
		    aboutBio: data.about[0].bio,
        })
        console.log(this.state.aboutbioImage)
    })
      .catch(err => console.log(err));
  };
	render() {
		return (
			<div className="About" id="aboutInfo">
				<div className="container containerAbout">
					<Col md={12}>
						<div class="aboutTitle">
							About Me
						</div>
					</Col>
					<Col md={3} mdOffset={1}>
						<Image src = {this.state.aboutbioImage} className = 'about-profile-pic' rounded/>
					</Col>
					<Col md={7}>
						<div className= "bioContent">
							<p>{this.state.aboutBio}</p>
							<p>						
								Suas omnium eu mel. Veri libris vix in, his indoctum definitiones ex, ubique corpora duo ex. Cum error lobortis at, nemore laboramus mei id. Putant inimicus id sit. Habeo mandamus reprimique sed ei, consul volumus corrumpit cum in.

								Tollit veritus invidunt his te, mei ea suas graeco. Quando euismod id mea, mel ne omnis vituperatoribus, tation ubique vel an. Eos hendrerit vituperatoribus an, usu ut summo voluptatibus. Has ubique deleniti ei, vitae epicurei eum et. Modo ullum ridens an has, lorem consectetuer duo ne, in iusto splendide disputando usu.

								Velit dissentias no sit. Nec lorem tation facete ea, an his expetendtendis te. Movet euismod vocibus vix ut. Mea ad nostro voluptua nominati, vix ceteros fastidii eloquentiam ut, quis ornatus eos et. Elitr facete aliquam ad his, alii errem eum cu. Ut dignissim argumentum duo, te facilisi assueverit sadipscing per. Ubique tamquam incorrupte his an.
							</p>
						</div>
					</Col>
				</div>
			</div>
		)
	}
} 