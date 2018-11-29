// JavaScript Document


function handleFormSubmit(event) {
   // This next line prevents the reload of the form
   event.preventDefault();
   // Get values of inputs
   // Pass values to addNewPost()
	var username = document.getElementsByClassName("formUsername").value;
	console.log("Username typed: " + username);
	
}
