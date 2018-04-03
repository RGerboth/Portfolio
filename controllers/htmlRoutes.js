var path = require("path");


module.exports = function(app){

console.log("html routes page")
app.get("/", function(req, res){

	console.log("index.html has rendered")
	res.sendFile(path.join(__dirname, '../client/public/index.html'));
})

// app.get("/admin", function(req, res){
// 	console.log("html rendering")

// 	res.sendFile(path.join(__dirname, '../client/public/admin.html'));
// })




}