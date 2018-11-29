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
	var inputTypeSelectors = "input[type=text], textarea[type=text]";
	var fields = document.querySelectorAll(inputTypeSelectors);
	for (i=0; i<fields.length; i++){
		fields[i].addEventListener("focus", setBackground);
		fields[i].addEventListener("blur", setBackground);
	}
});




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
	jokeText.style.left = "25%";
	
	jokeText.style.boxShadow = "3px 3px 5px 6px grey";
	
	document.getElementById("test").appendChild(jokeText);
});

getHerc.addEventListener("mouseleave", function(){
	var inv = document.querySelector('#makeInvis');
	inv.parentNode.removeChild(inv);
});

