// JavaScript Document


function handleFormSubmit(event) {
   // This next line prevents the reload of the form
   event.preventDefault();
   // Get values of inputs
   // Pass values to addNewPost()
	var nameTyped = document.getElementById("name").value;
	console.log("Name typed: " + nameTyped);
	var emailTyped = document.getElementById("email").value;
	console.log("Email typed: " + emailTyped);
	
	addNewPost(nameTyped, emailTyped);
	
}

var submittedAlreadyOnce = false;

function addNewPost(nameTyped, emailTyped) {
	
	if (submittedAlreadyOnce == false){
		var parentPostDiv = document.createElement("div");
		parentPostDiv.setAttribute("id", "post");
		
		var namePost = document.createElement("h1");
		namePost.textContent = "Thank you " + nameTyped + "!";
		
		var emailPost = document.createElement("p");
		emailPost.textContent = "We will contact you at " + emailTyped + " soon!";
		
		document.getElementById("contactFormDiv").appendChild(parentPostDiv);
		
		submittedAlreadyOnce = true;
	}else{
		var inv = document.querySelector('#post');
		inv.parentNode.removeChild(inv);
		
		var parentPostDiv = document.createElement("div");
		parentPostDiv.setAttribute("id", "post");
		
		var namePost = document.createElement("h1");
		namePost.textContent = "Thank you " + nameTyped + "!";
		
		var emailPost = document.createElement("p");
		emailPost.textContent = "We will contact you at " + emailTyped + " soon!";
		
	}
	
	parentPostDiv.appendChild(namePost);
	parentPostDiv.appendChild(emailPost);
	document.getElementById("contactFormDiv").appendChild(parentPostDiv);
	
}

window.onload = () => {
   // Once our window is loaded, we add the event listener for our post form
   contactFormFields.addEventListener('submit', handleFormSubmit);
};
