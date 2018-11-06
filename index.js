const SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.continuous = true;

const container = document.querySelector(".container");
let p = document.createElement("p");
container.appendChild(p);

recognition.addEventListener("result", function(e) {
	const transcript = Array.from(e.results)
		.map(r => r[0])
		.map(result => result.transcript)
		.join(" ");

	p.textContent = transcript;
	console.log(transcript);
	if (e.results[0].isFinal) {
		p = document.createElement("p");
		container.appendChild(p);
	}
});

// this make it listen for ever.
recognition.addEventListener("end", recognition.start);

recognition.start();
