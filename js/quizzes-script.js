// JavaScript Document


function handleFormSubmit(event) {
   // This next line prevents the reload of the form
   event.preventDefault();
   // Get values of inputs
   // Pass values to addNewPost()
	var nameTyped = document.getElementById("quiz1name").value;
	console.log("Name typed: " + nameTyped);
	
	addNewPost(nameTyped);
	
}

var submittedAlreadyOnce = false;

function addNewPost(nameTyped) {
	
	if (submittedAlreadyOnce == true){
		var inv = document.querySelector('#post');
		inv.parentNode.removeChild(inv);
	}
	
	var parentPostDiv = document.createElement("div");
		parentPostDiv.setAttribute("id", "post");
		
	var namePost = document.createElement("h1");
		namePost.textContent = "Thank you for taking our quiz " + nameTyped;
		
	var responsePost = document.createElement("p");
		responsePost.setAttribute("class", "createSpaceForText")
		responsePost.textContent = "After reviewing your submitted answers, we conclude that you should contact us or Herc to get some additional help.";//this could be a var after an if checks the choices...
	
	//Add the header thank you and then response to the page...
	parentPostDiv.appendChild(namePost);
	parentPostDiv.appendChild(responsePost);
	document.querySelector(".Quiz1").appendChild(parentPostDiv);
	
	submittedAlreadyOnce = true; //We want to make sure to delete the previous post before making a new one...
	
	//Delete the submit button after submission
	var removeSubmit = document.querySelector("#quiz1Submit");
		removeSubmit.parentNode.removeChild(removeSubmit);
	
	//Create a new button
	var createReturnHome = document.createElement("button");
		createReturnHome.setAttribute("class", "takeQuizAgain");
		createReturnHome.textContent = "Take Another Quiz!";
	
	//Add under the text...
		parentPostDiv.appendChild(createReturnHome);
		document.querySelector(".Quiz1").appendChild(parentPostDiv);
	
	//Make the new button go to the quiz page on click
	createReturnHome.addEventListener("click", function(){
		window.location = "quizzes.html";
	});
	
}

window.onload = () => {
   // Once our window is loaded, we add the event listener for our post form
    quiz1.addEventListener('submit', handleFormSubmit);
	quiz2.addEventListener('submit', handleFormSubmit);
	quiz3.addEventListener('submit', handleFormSubmit);
	quiz4.addEventListener('submit', handleFormSubmit);
};
