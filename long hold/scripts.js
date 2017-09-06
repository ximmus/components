function longHold(theClicked){

	var theClicked = document.getElementById(theClicked);
	var hiddenText = document.getElementById("hidden-text");

	function fireIt(){
		hiddenText.classList.toggle('hidden');
	}

	var theTimer;
	
	function startTimer(){
		theTimer = setTimeout(fireIt, 2000);
	}

	function stopTimer(){
		clearTimeout(theTimer);
	}
	
	theClicked.addEventListener("mousedown", startTimer);
	theClicked.addEventListener("mouseup", stopTimer);
}

longHold("long-click");