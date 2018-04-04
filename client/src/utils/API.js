import axios from "axios";

export default {
  // Gets all the portfolio information including bio and homepage
  getAll: function() {
    return axios.get("/api/renderPage");
  },
  //add first About document, one time only
  createAbout: function(about) {
    console.log(`Create About`);
    return axios.post("/about", about)
  },
  // Updates the bio information
  updateAbout: function(about) {
    console.log(`Update About ID: ${about._id} ${about.name} ${about.bio} ${about.bioImg}`); //ID valid here
    return axios.post("/about/" + about._id, about)
  },
  //gets the appropriate project for the modal
  getProject: function(id){
    console.log("here")
    return axios.get("/portfolioModal/" + id);
  },
  // Deletes the project with the given id
  deleteProject: function(id) {
    return axios.delete("/portfolio/" + id);
  },
  // Deletes the project with the given id
  updateProject: function(portfolio) {
    return axios.post("/portfolio/" + portfolio._id, portfolio);
  },
  // saves new project to portfolios
  saveProject: function(projectData) {
    return axios.post("/portfolio", projectData);
  },
  //gets all existing contacts from contacts
  getContacts: function() {
    return axios.get("/contacts");
  },
  //gets all existing contacts from contacts
  saveContact: function(data) {
    return axios.post("/contacts", data);
  },
  //gets all existing contacts from contacts
  deleteContact: function(id) {
    return axios.delete("/contacts/" + id);
  }
};






