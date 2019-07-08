const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition()

recognition.onstart = function (){
    console.log('voice is activated, you can talk to microphone');
}

recognition.onresult = (event) => {
    console.log(event);

}

//add the listener to the btn

btn.addEventListener('click', () => {
    recognition.start();

})