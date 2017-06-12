const electron = require('electron');
const clipboard = electron.clipboard;



var readText = function () {


    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[7]; // Note: some voices don't support altering params
    msg.voiceURI = 'native';
    msg.volume = 1; // 0 to 1
    msg.rate = .83; // 0.1 to 10
    msg.pitch = 1; //0 to 2
    msg.text = window.labelTitle.value;
    msg.lang = 'en-US';

    msg.onend = function (e) {
        console.log('Finished in ' + event.elapsedTime + ' seconds.');
    };

    speechSynthesis.speak(msg);


}



module.exports = {
    readClip: function () {


        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[7]; // Note: some voices don't support altering params
        msg.voiceURI = 'native';
        msg.volume = 1; // 0 to 1
        msg.rate = .83; // 0.1 to 10
        msg.pitch = 1; //0 to 2
        msg.text = clipboard.readText();
        msg.lang = 'en-US';

        msg.onend = function (e) {
            console.log('Finished in ' + event.elapsedTime + ' seconds.');
        };

        speechSynthesis.speak(msg);


    }

}