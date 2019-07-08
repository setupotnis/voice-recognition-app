const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition()

const motivation = [ 'I\'m doing well, what about you?', 
                    'feeling pretty down, you should be more productive', 
                    'have you read any books today?',
                    'Why don\'t you be productive with your time instead',
                    'you only have 24 hours in a day, are you happy with the way you used them?',
                    'you\'re working hard, but you can definitely be more focused',
                    'are you happy with what you accomplished today?',
                    'Is that all you\'re going to work on for now?'];

recognition.onstart = function (){
    console.log('voice is activated, you can talk to microphone');
}

recognition.onresult = (event) => {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutloud(transcript);

}

//add the listener to the btn

btn.addEventListener('click', () => {
    recognition.start();

});

function readOutloud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'please repeat what you said more clearly';

    if(message.includes('what', 'how','you', 'I', 'any', 'today', 'work')){
        const output = motivation[Math.floor(Math.random() * motivation.length)]
        speech.text = output;
    };

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}