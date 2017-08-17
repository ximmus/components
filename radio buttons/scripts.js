// empty array to hold the answers
var answers = [];

function validateSelection() {
	// get the radio form
	var selection = document.answers.selection;

	// Get the submit button
	var submit = document.getElementById("submit");

	// Check if there is a selection 
	for (var i=0; i<selection.length; i++) {
    	if (selection[i].checked){
        	submit.disabled = false;
        	break;
    	}
     }
     if (i==selection.length){
     	submit.disabled = true;
     }
 }

// helper function to get answers
function getAnswer() {
    var question = document.getElementById("question");
    var answer = "";
    var i;
    for (i = 0; i < question.length; i++) {
        if (question[i].checked) {
            answer = answer + question[i].value;
            question[i].checked = false; // clear selection on submit
            validateSelection();
        }
    }
    // Add answer to answers array
    answers.push(answer);
}

function getAnswers() {
	console.log(answers);
}