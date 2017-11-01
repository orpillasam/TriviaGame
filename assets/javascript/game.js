$(document).ready(function() {

	// var	question01=	{
	// 		question: "question 1",
	// 		answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
	// 		correctAnswer: question01[0],
	// 	};
	// var	question02= {
	// 		question: "question 2",
	// 		answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
	// 		correctAnswer: 1,
	// 	};
	// var	question03= {
	// 		question: "question 3",
	// 		answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
	// 		correctAnswer: 2,
	// 	};
	// var	question04= {
	// 		question: "question 4",
	// 		answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
	// 		correctAnswer: 3,
	// 	};
	var timer = 60;
	var intervalId;
	var questionsCorrect = 0;
	var userAnswers=[];
	var answerKey = ['a','a','a'];
	// var clockRunning = false;
	var clockRunning = false;
	gameStart = false;

	//sets the inteval of the clock
	function run() {
	      intervalId = setInterval(startClock, 1000);
 	}

 	//starts the timer
	function startClock(){
		timer--;
		console.log(timer);
		if (timer===0){
			stop();
			alert("time's up!");
			gameReset();
		}
		$('#game-timer').html('Time Remaining: ' + timer + ' Seconds');
	}
	//starts the game and timer
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
	
	//ends the game and submits the answers
	$("#submit").click(function() {
		if (clockRunning === true){
		  	var val01 = $('input:radio[name=q01]:checked').val();
			var val02 = $('input:radio[name=q02]:checked').val();
			var val03 = $('input:radio[name=q03]:checked').val();
			console.log(val01, val02, val03);
			userAnswers.push(val01, val02, val03);
			console.log(userAnswers);
			alert(val01, val02, val03);
			stop();
			clockRunning = false;
			gameCheck();
			// gameEnd();
		}
	});

	console.log(answerKey);

	//resets the timer/clock
	function stop(){
		clearInterval(intervalId);
	}
	//checks the number that are correct and displays accordingly
	function gameCheck(){
		for(i=0; i<answerKey.length;i++){
			
		}
	}
	//resets the game
	function gameReset(){
		var timer = 60;
		var questionsCorrect = 0;
		var userAnswers=[];
		var clockRunning = false;
		gameStart = false;
		$("#trivia-container").empty();
	}



		//game end determines the total score
		//displays results
		//gameReset as timer or button


// function displayTrivia(){
// 	//displays trivia game
// 	//starts timer
// }


// function gameStart(){

	// answerArray.push(answers;)
// }

});




// timeConverter: function(t) {

//     var minutes = Math.floor(t / 60);
//     var seconds = t - (minutes * 60);

//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }

//     if (minutes === 0) {
//       minutes = "00";
//     }
//     else if (minutes < 10) {
//       minutes = "0" + minutes;
//     }

//     return minutes + ":" + seconds;
//   }
// };