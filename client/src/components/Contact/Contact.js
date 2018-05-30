import React, { Component } from 'react';
import './Contact.css';
import API from "../../utils/API";



export default class Contact extends Component {

state = {
	activeName: ""
}



validateForm = (event) => {
	event.preventDefault();
	console.log("inside of the validateForm")

	let name =  document.getElementById('name').value;
    if (name == "") {
        document.getElementById('status').innerHTML = "Name cannot be empty";
        return false;
    }
    let email =  document.getElementById('email').value;
    if (email == "") {
        document.getElementById('status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.getElementById('status').innerHTML = "Email format invalid";
            return false;
        }
    }
    let subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.getElementById('status').innerHTML = "Subject cannot be empty";
        return false;
    }
    let message =  document.getElementById('message').value;
    if (message == "") {
        document.getElementById('status').innerHTML = "Message cannot be empty";
        return false;
    }
    document.getElementById('status').innerHTML = "Sending...";
    
    API.saveContact({
    	name: document.getElementById('name').value,
    	email: document.getElementById('email').value,
    	subject: document.getElementById('subject').value,
    	message: document.getElementById('message').value
    })
      .then(res =>{
      	console.log(res.data)
      	const data = res.data
      	if(res.data){
      		document.getElementById('status').innerHTML = "Your message was sent! Robert will get back with you soon, thank you for your interest.";
      		document.getElementById('name').value="";
      		document.getElementById('email').value="";
      		document.getElementById('subject').value="";
      		document.getElementById('message').value="";

      	}
    })
      .catch(err => console.log(err));

}

toggleForm = () => {
	console.log("toggle")
		this.setState({
			activeName: "active"
		})
	
}

toggleValdate = () => {
	console.log("here in val")
	// if(document.getElementById('name').value === ""){
	// 	this.setState({
	// 		activeName: ""
	// 	})
	// }
}

saveContact = () => {
	API.saveContact()
      .then(res =>{
      	console.log(res.data)
      	const data = res.data
    })
      .catch(err => console.log(err));


}

	render() {
		return (
			<div className= "fluid-container contactContainer contact" >
				
			
				<section class="section" onClick={this.toggleValdate}>

				    <h2 class="section-heading pt-4" id="contactFormHeader">Contact and Connect</h2>
{/*				    <p class="section-description" id="contactFormMessage">I would love to hear from you and will get back to you as soon as possible.</p>
*/}
				    <div class="row">
				        <div class="col-md-6 col-xl-6">
				            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
				                <div class="row">
				                    <div class="col-md-6">
				                        <div class="md-form">
				                            <input type="text" id="name" name="name" class="form-control" onSelect={this.toggleForm} />
				                            <label for="name" id="nameLabel"class="active field-label">Your name</label>
				                        </div>
				                    </div>
				                    <div class="col-md-6">
				                        <div class="md-form">
				                            <input type="text" id="email" name="email" class="form-control" />
				                            <label for="email" id="emailLabel" class="active">Your email</label>
				                        </div>
				                    </div>
				                 

				                </div>

				            
				                <div class="row">
				                    <div class="col-md-12">
				                        <div class="md-form">
				                            <input type="text" id="subject" name="subject" class="form-control" />
				                            <label for="subject" id="subjectLabel" class="active">Subject</label>
				                        </div>
				                    </div>
				                </div>
				           

				              
				                <div class="row">

				                  
				                    <div class="col-md-12">

				                        <div class="md-form">
				                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
				                            <label for="message" id= "messageLabel" class="">Your message</label>
				                        </div>

				                    </div>
				                </div>
				               

				            </form>

				            <div class="center-on-small-only">
				                <a class="btn btn-primary" href="mailto:robert.gerboth@gmail.com?Subject=subject" target="_blank" onClick= {this.validateForm}>Send</a>
				            </div>
				            <div id="status"></div>
				        </div>
				      
				        <div class="col-md-2 col-xl-2">
	                      <a class="socialMediaIcons" href="https://github.com/RGerboth" target="_blank">
	                        <i className="fab fa-github-square fa-10x"></i>
                          </a>
                          <br />
	                      <a class="socialMediaIcons" href="https://linkedin.com/in/robert-gerboth" target="_blank">
	                        <i className="fab fa-linkedin-square fa-10x"></i>
                          </a>
{/*
				                <a class="btn btn-primary gitHubButton" href="https://github.com/rgerboth" target="_blank">GitHub</a>
				                <a class="btn btn-primary linkedInButton" href="https://linkedin.com/in/robert-gerboth" target="_blank">LinkedIn</a>
{/*			            <ul class="contact-icons">
				                <li><i class="fa fa-map-marker fa-2x"></i>
				                    <p>San Francisco, CA 94126, USA</p>
				                </li>

				                <li><i class="fa fa-phone fa-2x"></i>
				                    <p>+ 01 234 567 89</p>
				                </li>

				                <li><i class="fa fa-envelope fa-2x"></i>
				                    <p>robert.gerboth@gmail.com</p>
				                </li>
				            </ul>
*/}
				        </div>
				      

				    </div>

				</section>
		
                      
			</div>
		)
	}
} 