// Contact Page JS

//This first function is when you click in the text fields the background changes

function setBackground(e){
	if (e.type == "focus"){
		e.target.style.backgroundColor = "#FFE6A2";
	}else if (e.type == "blur"){
		e.target.style.backgroundColor = "white";
	}
}

window.addEventListener("load", function(){
	var inputTypeSelectors = "input[type=text], textarea[type=text], input[type=email], input[type=tel]";
	var fields = document.querySelectorAll(inputTypeSelectors);
	for (i=0; i<fields.length; i++){
		fields[i].addEventListener("focus", setBackground);
		fields[i].addEventListener("blur", setBackground);
	}
});



//The joke when hovering over Herc picture

var getHerc = document.getElementById("hercFace");

getHerc.addEventListener("mouseover", function(){
	var jokeText = document.createElement("h5");
	jokeText.setAttribute("class", "quackHeader");
	jokeText.setAttribute("id", "makeInvis");
	
	var makeSpan = document.createElement("span");
	makeSpan.textContent = "I'm watching you...";
	jokeText.appendChild(makeSpan);
	
	jokeText.style.position = "fixed";
	jokeText.style.fontSize = "500%";
	jokeText.style.margin = "0% 20% 20% 22%";
	//jokeText.style.boxShadow = "3px 3px 5px 6px grey";
	
	document.getElementById("mainIdDiv").appendChild(jokeText);
});

getHerc.addEventListener("mouseleave", function(){
	var inv = document.querySelector('#makeInvis');
	inv.parentNode.removeChild(inv);
});



//Function that runs on submit will grab the values inputted

function handleFormSubmit(event) {
   // This next line prevents the reload of the form
   event.preventDefault();
   // Get values of inputs
   // Pass values to addNewPost()
	var nameTyped = document.getElementById("name").value;
	//Turn the name enter and make first letter capital
	nameTyped = nameTyped.charAt(0).toUpperCase() + nameTyped.slice(1);
	console.log("Name typed: " + nameTyped);
	var emailTyped = document.getElementById("email").value;
	console.log("Email typed: " + emailTyped);
	
	addNewPost(nameTyped, emailTyped);
	
}

//Making the Contact Form Make a New Text Field:

var submittedAlreadyOnce = false;

function addNewPost(nameTyped, emailTyped) {
	
	if (submittedAlreadyOnce == true){
		var inv = document.querySelector('#post');
		inv.parentNode.removeChild(inv);
	}
	
	var parentPostDiv = document.createElement("div");
		parentPostDiv.setAttribute("id", "post");
		
	var namePost = document.createElement("h1");
		namePost.textContent = "Thank you " + nameTyped + "!";
		
	var emailPost = document.createElement("p");
		emailPost.textContent = "We will contact you at " + emailTyped + " soon!";
	
	parentPostDiv.appendChild(namePost);
	parentPostDiv.appendChild(emailPost);
	document.getElementById("contactFormDiv").appendChild(parentPostDiv);
	submittedAlreadyOnce = true; //We want to make sure to delete the previous post before making a new one...
	
}


window.onload = () => {
   // Once our window is loaded, we add the event listener for our post form
   contactFormFields.addEventListener('submit', handleFormSubmit);
};
