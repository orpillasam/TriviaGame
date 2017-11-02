$(document).ready(function() {

var trivia = [
		question01=	{
			question: "question 1",
			answers: ["answer 1-1", "answer 2-1", "answer 3-1", "answer 4-1"],
			correctAnswer: [0],
		},
		question02= {
			question: "question 2",
			answers: ["answer 1-2", "answer 2", "answer 3", "answer 4"],
			correctAnswer: [1],
		},
		question03= {
			question: "question 3",
			answers: ["answer 1-3", "answer 2", "answer 3", "answer 4"],
			correctAnswer: [2],
		},
		question04= {
			question: "question 4",
			answers: ["answer 1-4", "answer 2", "answer 3", "answer 4"],
			correctAnswer: [3],
		},
		question05= {
			question: "question 5",
			answers: ["answer 1-5", "answer 2", "answer 3", "answer 4"],
			correctAnswer: [0],
		},
		question06= {
			question: "question 6",
			answers: ["answer 1-6", "answer 2", "answer 3", "answer 4"],
			correctAnswer: [1],
		}];
	var timer = 30;
	var intervalId;
	var correctGuesses=0;
	var totalQuestions = 6;
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
generateRandomQuestions();

	function generateRandomQuestions(){
		for(var j = 0; j<totalQuestions; j++){
			randomQuestion = trivia[Math.floor(Math.random()*totalQuestions)];
			console.log(randomQuestion);

			var $triviaDiv = $('<div>');
			var $formDiv = $('<p>');
			$triviaDiv.attr('class','trivia-question');
			var $question = randomQuestion.question;
			var $answer = randomQuestion.answers;
			var $correctanswer = randomQuestion.correctAnswer;
			console.log($correctanswer);
			var $questionDiv = $('<h2>').append($question);
			var $answerDiv = $('<p>').append($answer);
			$triviaDiv.append($questionDiv);
			$triviaDiv.append($answer);
			answerKey.push($correctanswer);
			console.log(answerKey);
			//appends the trivia question to the page
			$('#trivia').append($triviaDiv);

		for(var k=0; k<trivia[j].answers.length; k++){
			var $inputDiv =$('input');
			var $labelDiv =$('label');
			$inputDiv.attr('type','radio');
			$inputDiv.attr('id' + 'q' + j);
			$inputDiv.attr('value', k);
			$inputDiv.attr('for', 'q' + j + 'radio' + k);
			$labelDiv.innerHTML =trivia[j].answers[k];
			console.log("label div is " + $labelDiv);

			$formDiv.append($inputDiv);
			$formDiv.append($labelDiv);
		}

		}
	}


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

