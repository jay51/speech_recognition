const SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.interimResults = true;

recognition.addEventListener("result", function(e) {
	console.log(e.results);
});

recognition.start();
