// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables */
var synth = window.speechSynthesis;
var textToSpeak = '';
var speakButton = document.getElementById('speakButton');
var resetButton = document.getElementById('resetButton');
var subjectButton = document.getElementById('subjectButton');
var verbButton = document.getElementById('verbButton');
var adjectiveButton = document.getElementById('adjectiveButton');
var nounButton = document.getElementById('nounButton');
var placeButton = document.getElementById('placeButton');
var generateButton = document.getElementById('generateButton');
var storyOutput = document.getElementById('storyOutput');

var subjectArray = ['The cat', 'The dog', 'The bird', 'The rabbit', 'The fish'];
var verbArray = ['ate', 'chased', 'slept on', 'jumped over', 'played with'];
var adjectiveArray = ['a big', 'a small', 'a cute', 'a funny', 'an adorable'];
var nounArray = ['ball', 'bone', 'mouse', 'carrot', 'toy'];
var placeArray = ['in the park', 'at home', 'in the garden', 'at the beach', 'in the forest'];

/* Functions */
function getRandomIndex(array) {
	return Math.floor(Math.random() * array.length);
}

function generateStory() {
	var subject = subjectArray[getRandomIndex(subjectArray)];
	var verb = verbArray[getRandomIndex(verbArray)];
	var adjective = adjectiveArray[getRandomIndex(adjectiveArray)];
	var noun = nounArray[getRandomIndex(nounArray)];
	var place = placeArray[getRandomIndex(placeArray)];

	textToSpeak = `${subject} ${verb} ${adjective} ${noun} ${place}`;
	storyOutput.textContent = textToSpeak;
}

function speakNow(string) {
	var utterThis = new SpeechSynthesisUtterance(string);
	utterThis.rate = 1; // Adjust the speaking rate if needed
	synth.speak(utterThis);
}

function resetStory() {
	textToSpeak = '';
	storyOutput.textContent = '';
}

/* Event Listeners */
speakButton.addEventListener('click', function() {
	if (textToSpeak.trim() !== '') {
		speakNow(textToSpeak);
	}
});

resetButton.addEventListener('click', function() {
	resetStory();
});

subjectButton.addEventListener('click', function() {
	var subject = subjectArray[getRandomIndex(subjectArray)];
	speakNow(subject);
});

verbButton.addEventListener('click', function() {
	var verb = verbArray[getRandomIndex(verbArray)];
	speakNow(verb);
});

adjectiveButton.addEventListener('click', function() {
	var adjective = adjectiveArray[getRandomIndex(adjectiveArray)];
	speakNow(adjective);
});

nounButton.addEventListener('click', function() {
	var noun = nounArray[getRandomIndex(nounArray)];
	speakNow(noun);
});

placeButton.addEventListener('click', function() {
	var place = placeArray[getRandomIndex(placeArray)];
	speakNow(place);
});

generateButton.addEventListener('click', function() {
	generateStory();
});
