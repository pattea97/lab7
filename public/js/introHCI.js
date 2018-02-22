'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	${".likeBtn"}.click(sendToAnalystic);
}

function sendToAnalystic(event){
	event.preventDefault();
	console.log("clicked the button");
	ga('create', 'UA-114568511-1', 'auto');
	ga("send", "event", "like", "click");
}