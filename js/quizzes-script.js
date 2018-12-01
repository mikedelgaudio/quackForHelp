// JavaScript Document
var flag = "";

var quiz1Image = document.getElementById("Quiz1");
quiz1Image.addEventListener("click", function(){
	document.getElementsByClassName('welcome-page')[0].style.display = 'none';
	document.getElementsByClassName('Quiz1')[0].style.display = 'flex';
	flag = "quiz1";
});

var quiz2Image = document.getElementById("Quiz2");
quiz2Image.addEventListener("click", function(){
	document.getElementsByClassName('welcome-page')[0].style.display = 'none';
	document.getElementsByClassName('Quiz2')[0].style.display = 'flex';
	flag = "quiz2";
});

var quiz3Image = document.getElementById("Quiz3");
quiz3Image.addEventListener("click", function(){
	document.getElementsByClassName('welcome-page')[0].style.display = 'none';
	document.getElementsByClassName('Quiz3')[0].style.display = 'flex';
	flag = "quiz3";
});

var quiz4Image = document.getElementById("Quiz4");
quiz4Image.addEventListener("click", function(){
	document.getElementsByClassName('welcome-page')[0].style.display = 'none';
	document.getElementsByClassName('Quiz4')[0].style.display = 'flex';
	flag = "quiz4";
});

 

function handleFormSubmit(event) {
   // This next line prevents the reload of the form
   event.preventDefault();
   // Get values of inputs
   // Pass values to addNewPost()
	
//Get the name the user enters, depends on what quiz they are on thats why we use a flag...
	if (flag == "quiz1"){
		var nameTyped = document.getElementById("quiz1name").value;	
	}else if (flag == "quiz2"){
		var nameTyped = document.getElementById("quiz2name").value;
	}else if (flag == "quiz3"){
		var nameTyped = document.getElementById("quiz3name").value;
	}else{
		var nameTyped = document.getElementById("quiz4name").value;
	}

//Make sure the first letter of the name is always capital for style purposes...
	nameTyped = nameTyped.charAt(0).toUpperCase() + nameTyped.slice(1);
	
	console.log("Name typed: " + nameTyped);
	
	addNewPost(nameTyped);
}

function addNewPost(nameTyped) {
	
	var parentPostDiv = document.createElement("div");
		parentPostDiv.setAttribute("id", "post");
		
	var namePost = document.createElement("h1");
		namePost.textContent = "Thank you for taking our quiz, " + nameTyped + ".";
		
	var responsePost = document.createElement("p");
		responsePost.setAttribute("class", "createSpaceForText")
		responsePost.textContent = "After reviewing your submitted answers, we conclude that you should contact us or Herc to get some additional help.";//this could be a var after an if checks the choices...
	
	//Add the header thank you and then response to the page...
	parentPostDiv.appendChild(namePost);
	parentPostDiv.appendChild(responsePost);
	
	if (flag == "quiz1"){
		document.querySelector(".Quiz1").appendChild(parentPostDiv);
	}else if (flag == "quiz2"){
		document.querySelector(".Quiz2").appendChild(parentPostDiv);
	}else if (flag == "quiz3"){
		document.querySelector(".Quiz3").appendChild(parentPostDiv);
	}else{
		document.querySelector(".Quiz4").appendChild(parentPostDiv);
	}
	
	
	//Delete the submit button after submission
	if (flag == "quiz1"){
		var removeSubmit = document.querySelector("#quiz1Submit");
	}else if (flag == "quiz2"){
		var removeSubmit = document.querySelector("#quiz2Submit");
	}else if (flag == "quiz3"){
		var removeSubmit = document.querySelector("#quiz3Submit");
	}else{
		var removeSubmit = document.querySelector("#quiz4Submit");
	}
	
		removeSubmit.parentNode.removeChild(removeSubmit);
	
	//Create a new button
	var createReturnHome = document.createElement("button");
		createReturnHome.setAttribute("class", "takeQuizAgain");
		createReturnHome.textContent = "Take Another Quiz!";
	
	//Add under the text...
		parentPostDiv.appendChild(createReturnHome);
	
	if (flag == "quiz1"){
		document.querySelector(".Quiz1").appendChild(parentPostDiv);
	}else if (flag == "quiz2"){
		document.querySelector(".Quiz2").appendChild(parentPostDiv);
	}else if (flag == "quiz3"){
		document.querySelector(".Quiz3").appendChild(parentPostDiv);
	}else{
		document.querySelector(".Quiz4").appendChild(parentPostDiv);
	}
	
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
