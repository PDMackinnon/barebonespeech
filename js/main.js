var recognition = new webkitSpeechRecognition();

recognition.continuous = true;
recognition.interimResults = true;

recognition.lang = "en-GB";

recognition.start();

recognition.onstart = function(event) {
	
	
} 

recognition.onerror = function(event) {
	
	
}

recognition.onend = function(event) {
	
	
}


var interimView;
var finalView;

$(function() {
	interimView = document.getElementById("interim");
	finalView = document.getElementById("final");  

	interimView.innerHTML = "";
	finalView.innerHTML = "";
});



















recognition.onresult = function(event) {

var interim_transcript = "";
var final_transcript = "";

if (typeof(event.results) == "undefined") {
	recognition.onend = null;
	recognition.stop();
	return;
	}


	for (var i = event.resultIndex; i < event.results.length; ++i) {
		if (event.results[i].isFinal) {
			final_transcript += event.results[i][0].transcript;
		}
		else {
			interim_transcript += event.results[i][0].transcript;
		}//end if else
	}//end for
	
	interimView.innerHTML = interim_transcript;
	finalView.innerHTML = final_transcript;

	
}

