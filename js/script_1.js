// JavaScript Document
/*I pledge my honor that I have abided by the Stevens Honor System.
Michael DelGaudio
Brandon Seidman
Katelyn Chen
Milad Masoodi
Mitra Modi*/

//This is so that when you click on the image it will open the quiz on the page rather than us making 4 pages of different quizzes.

var quiz1Image = document.getElementById("Quiz1");
quiz1Image.addEventListener("click", function(){
	document.getElementsByClassName('welcome-page')[0].style.display = 'none';
	document.getElementsByClassName('Quiz1')[0].style.display = 'flex';
});

var quiz2Image = document.getElementById("Quiz2");
quiz2Image.addEventListener("click", function(){
	document.getElementsByClassName('welcome-page')[0].style.display = 'none';
	document.getElementsByClassName('Quiz2')[0].style.display = 'flex';
});

var quiz3Image = document.getElementById("Quiz3");
quiz3Image.addEventListener("click", function(){
	document.getElementsByClassName('welcome-page')[0].style.display = 'none';
	document.getElementsByClassName('Quiz3')[0].style.display = 'flex';
});

var quiz4Image = document.getElementById("Quiz4");
quiz4Image.addEventListener("click", function(){
	document.getElementsByClassName('welcome-page')[0].style.display = 'none';
	document.getElementsByClassName('Quiz4')[0].style.display = 'flex';
});

