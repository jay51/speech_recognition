const SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.continuous = true;

const container = document.querySelector(".container");
const p = document.createElement("p");
container.appendChild(p);

recognition.addEventListener("result", function(e) {
	const transcript = Array.from(e.results)
		.map(r => r[0])
		.map(result => result.transcript)
		.join(" ");

	p.textContent = transcript;
	console.log(transcript);
});

recognition.start();
