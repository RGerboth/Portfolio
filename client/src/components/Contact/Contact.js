import React, { Component } from 'react';
import './Contact.css';
import API from "../../utils/API";

export default class Contact extends Component {

state = {
	activeName: ""
}

validateForm = (event) => {
  event.preventDefault();

  let name =  document.getElementById('name').value;
  if (name === "") {
    document.getElementById('status').innerHTML = "Name cannot be empty";
      return false;
  }
  
  let email =  document.getElementById('email').value;
  if (email === "") {
    document.getElementById('status').innerHTML = "Email cannot be empty";
    return false;
  } else {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)){
      document.getElementById('status').innerHTML = "Email format invalid";
      return false;
    }
  }
  
  let subject =  document.getElementById('subject').value;
  if (subject === "") {
     document.getElementById('status').innerHTML = "Subject cannot be empty";
     return false;
  }
  
  let message =  document.getElementById('message').value;
  if (message === "") {
    document.getElementById('status').innerHTML = "Message cannot be empty";
    return false;
  }
  
  document.getElementById('status').innerHTML = "Sending...";
  
  API.saveContact({
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  }).then(res => {
    if(res.data){
      document.getElementById('status').innerHTML = "Your message was sent! I will get back with you soon, thank you for your interest.";
      document.getElementById('name').value="";
      document.getElementById('email').value="";
      document.getElementById('subject').value="";
      document.getElementById('message').value="";
   	}
  }).catch(err => console.log(err));
}

toggleForm = () => {
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
  }).catch(err => console.log(err));
}

render() {
  return (
  <div className= "fluid-container contactContainer contact" >
    <section class="section" onClick={this.toggleValdate}>
      <h2 class="section-heading pt-4" id="contactFormHeader">Contact and Connect</h2>
      <div class="col-md-4 col-xl-4 socialIconContainer" align="center">
        <a class="socialMediaIcons" href="https://github.com/RGerboth" rel="noopener noreferrer" target="_blank">
          <i className="fab fa-github-square fa-10x"></i>
        </a>
        <br />
        <a class="socialMediaIcons" href="https://linkedin.com/in/robert-gerboth" rel="noopener noreferrer" target="_blank">
          <i className="fab fa-linkedin-square fa-10x"></i>
        </a>
      </div>
      <div class="row">
        <div class="col-md-8 col-sm-8 col-xl-8">
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
                  <textarea type="text" id="contactFormMessage" name="message" rows="2" class="form-control md-textarea"></textarea>
                  <label for="message" id= "messageLabel" class="">Your message</label>
                </div>
              </div>
            </div>
          </form>
          <div class="center-on-small-only">
            <a class="btn btn-primary" href="mailto:robert.gerboth@gmail.com?Subject=subject" rel="noopener noreferrer" target="_blank" onClick= {this.validateForm}>Send</a>
          </div>
          <div id="status">
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

}