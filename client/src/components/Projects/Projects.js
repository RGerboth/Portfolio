import React, { Component } from 'react'
import './Projects.css'
import API from "../../utils/API";
import {Grid, Col, Image } from 'react-bootstrap'


export default class Projects extends Component {
	state = {
    projects: [],
    image: "",
    name: "",
    description: "",
    urlGit: "",
    urlLive: ""
  };

  componentDidMount() {
    this.loadPage();

    console.log(this.state.projects)

  }

//this will render the proper project details on the click of its image
  renderDetails = (event) => {
    //allows the get request to find the data for a specific project
    const clicked = event.target
    let projectId = clicked.getAttribute("reactid");
   
    API.getProject(projectId)
      .then(res =>{
        console.log(res.data)
        const data = res.data
        this.setState({ 
            image: data.portImg,
            name: data.name,
            description: data.projectDes,
            urlGit: data.githubURL,
            urlLive: data.liveLink
        })
    })
      .catch(err => console.log(err));
    //toggles the modal on
      var buttonId = event.target.id;
      document.getElementById("modal-container").removeAttribute("class");
      document.getElementById("modal-container").classList.add(buttonId);
      document.getElementsByTagName("body")[1].classList.add('modal-active');

  };

  closeModal = (event) => {
      
      document.getElementById("modal-container").classList.add("out");
      document.getElementsByTagName("body")[1].removeAttribute('modal-active');

  }

  preventModalClose = (event) => {
    event.stopPropagation();
  }


  loadPage = () => {
  	//gets all the project data on the page load
    API.getAll()
      .then(res =>{
      	console.log(res.data.portfolio)
      	const data = res.data
        this.setState({ 

        projects: data.portfolio

        })
    })
      .catch(err => console.log(err));
  };
	render() {
		return (
      <body>
			   <div>
				
    				<div id="modal-container" class="portfolio" onClick = {this.closeModal}>
              <div class="modal-background" >
                <div class="modal" onClick = {this.preventModalClose}>
                  <h2>{this.state.name}</h2>
                  <img id="modalImage" src= {this.state.image} />
                  <p>{this.state.description}</p>
                  <a id="link" href = {this.state.urlGit} target= "_blank"> Check Out Its ReadMe </a>
                  <br />
                  {this.state.urlLive ? (

                    <a id="link" href = {this.state.urlGit} target= "_blank"> This Site is Live! </a>
                    ) : ("") }
                  

                </div>
              </div>
            </div>
            <div class="content container">
              <h1>Projects Go Below</h1>
              <div class="buttons col-12">

                {this.state.projects.map(project => (
                
                    <div class="imgContainer">
                      <img src={project.portImg} id="one" class="button" key={project._id} reactid= {project._id} onClick = {this.renderDetails} ></img>
                      <div class="text">{project.name}</div>
                    </div>
                
                ))}
                
              </div>
            </div>
			   </div>
      </body>
		)
	}
} 