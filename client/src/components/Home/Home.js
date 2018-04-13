import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import './Home.css'
import API from "../../utils/API";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';
import Footer from '../Footer';
import Contact from '../Contact';
import path from "path";

/*
found this function here 
http://stackoverflow.com/a/26831113
*/

// function inViewport($el) {
//     var H = window.document.height(),
//         r = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
//     return Math.max(0, t>0? H-t : (b<H?b:H));  
// }

// window.document.on("scroll resize", function(){
//   var window_offset = inViewport(document.getElementsByClassName("intro")); 
//   document.getElementsByClassName("overlay").height(window_offset);
//   document.getElementsByClassName("caption").css("bottom", (window_offset / 4) );
// });


export default class Home extends Component {
  state = {
    homeBackImg: "",
    homeMessage: "",
    homeTitle: "",
  };

  componentDidMount() {
    this.loadPage();
    
  }

  loadPage = () => {
  	console.log("loadpage");API.getAll()
      .then(res =>{
      	console.log(res.data)
      	const data = res.data
        this.setState({ 
        	
		    homeBackImg: data.about[0].bckImage,
		    homeMessage: data.about[0].name,
		    homeTitle: data.about[0].title,
		    
        })
        console.log("background image: " + this.state.homeBackImg)
    })
      .catch(err => console.log(err));
    
  };

	render() {
		
		return (

			<Router>

			<wrapper>
		        <div class= "fluid-container" >
		          <Navbar />
		          	<div class="fluid-container">
						<Jumbotron id = "background" >
							<div class="textHome">
								<h2>{this.state.homeMessage}</h2>
								<p>{this.state.homeTitle}</p>
								<br />
								
								<Button class="btnPrimary">Learn More About Me</Button>
								
							</div>
						</Jumbotron>
						
					</div>

					<About />
					<Skills />
					<Projects />

					<Contact />
					
				</div>
				<Footer />
			</wrapper>
			
			</Router>
		)
	}
} 




// style={{backgroundImage: "url('" + this.state.homeBackImg + "')"}}