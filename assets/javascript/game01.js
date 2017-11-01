$(document).ready(function() {

var trivia = [
		question01=	{
			question: "question 1?",
			answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
			correctAnswer: 'a',
		},
		question02= {
			question: "question 2?",
			answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
			correctAnswer: 'b',
		},
		question03= {
			question: "question 3?",
			answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
			correctAnswer: 'c',
		},
		question04= {
			question: "question 4?",
			answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
			correctAnswer: 'd',
		},
		question05= {
			question: "question 5?",
			answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
			correctAnswer: 'd',
		},
		question06= {
			question: "question 6?",
			answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
			correctAnswer: 'd',
		}];
	var timer = 30;
	var intervalId;
	var correctGuesses=0;
	var totalQuestions = 3;
	var userAnswers=[];
	var answerKey = [];
	var clockRunning = false;
	var gameStart = false;
	var randomQuestions =[];

	//sets the interval of the clock
	function run() {
	      intervalId = setInterval(startClock, 1000);
 	}

 	//starts the timer
	function startClock(){
		timer--;
		console.log(timer);
		if (timer===0){	
			alert("time's up!");
			playTrivia();
		}
		$('#game-timer').html('Time Remaining: ' + timer + ' Seconds');
	}

	//starts the game and timer by clicking on the start button
	$("#start-button").click(function(){
		if (clockRunning === false  ){ // &&gameStart === true
		console.log("game start is " + gameStart);
		$("game-timer").html('Time Remaining:');
		// $("#trivia-container").html("hello");   to display the questions
		run();
		startClock();
		clockRunning = true;
		}
	});

	//stores the value of the radio button as a user answer, then runs the rest of the functions to finish the game
	function playTrivia(){
			var val01 = $('input:radio[name=q01]:checked').val();
			var val02 = $('input:radio[name=q02]:checked').val();
			var val03 = $('input:radio[name=q03]:checked').val();
			console.log(val01, val02, val03);
			userAnswers.push(val01, val02, val03);
			console.log("user answers are " + userAnswers);
			console.log("answer key is " + answerKey);
			stop();
			clockRunning = false;
			gameCheck();
			scorePercentage();
			displayStats();
	}
	
	function scorePercentage(){
		percentage = (Math.round((correctGuesses/totalQuestions)*100));
		console.log("percentage is " + percentage);
	}

	//ends the game and submits the answers
	$("#submit").click(function() {
		if (clockRunning === true){
			playTrivia();
		}
	});

	//resets the timer/clock
	function stop(){
		clearInterval(intervalId);
	}
	//checks the user guesses against the correct answers.
	function gameCheck(){
		for(var i=0; i<answerKey.length; i++){
			if (userAnswers[i] == answerKey[i]){
				correctGuesses++;
				console.log("correct guesses is " + correctGuesses);
				console.log(correctGuesses/totalQuestions);
			}
			else{
				console.log("did not match");
			}
		}
	}

	function displayStats(){
		$('#game-stats').html('You answered ' + correctGuesses + " correct out of " + totalQuestions + " questions. <br>"
								+ "Your score is " + percentage + "%");
	}
	$("#restart-button").click(function() {
		gameReset();
	});

	//resets the game
	function gameReset(){
		timer = 30;
		correctGuesses = 0;
		userAnswers=[];
		clockRunning = false;
		gameStart = false;
		$("#game-stats").html("");
		$('#game-timer').html('Time Remaining: ' + timer + ' Seconds');
		// $("#trivia-container").empty();
	}
// generateRandomQuestions();

// 	function generateRandomQuestions(){
// 		for(var j = 0; j<totalQuestions; j++){
// 			randomQuestion = trivia[Math.floor(Math.random()*totalQuestions)];
// 			console.log(randomQuestion);
// 			randomQuestions.push(randomQuestion)
// 			answerKey.push(randomQuestion.correctAnswer);
// 			console.log("answer key is " + answerKey);
// 			console.log("rand questions are " + randomQuestions);
// 		}
// 		$('#question-one').html(randomQuestions[0].question);
// 		$('#question-two').html(randomQuestions[1].question);
// 		$('#question-three').html(randomQuestions[2].question);
// 		$('#radio-buttons').html(createRadioElement());
// 		$('#radio-buttons').append(randomQuestions[0].answers[0]);
// 	}



	// function createRadioElement(name, checked) {
	// 	var radioHtml = '<input type="radio" name="' + name + '"';
	// 	if ( checked ) {
	// 	  radioHtml += ' checked="checked"';
	// 	}
	// 	radioHtml += '/>';

	// 	var radioFragment = document.createElement('div');
	// 	radioFragment.innerHTML = radioHtml;

	// 	return radioFragment.firstChild;
	// }
});

