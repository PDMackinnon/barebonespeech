# barebonespeech
minimal web app to use chrome webkit speech api

This is a very stripped down demo of the speech API in Chrome browsers. To run you need to load from a web server (not running the local index.html from disk)
So either upload to your webspace or run a local webserver such as https://www.mamp.info/en/ 

The main code of interest in in JS/main.js

```javascript
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
```

This is derived from the following demo:

https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API

https://github.com/GoogleChrome/webplatform-samples/blob/master/webspeechdemo/webspeechdemo.html

