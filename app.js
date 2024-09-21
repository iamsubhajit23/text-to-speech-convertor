const userInput = document.querySelector("#user-input");
const convertBtn = document.querySelector("#convert-btn");

convertBtn.addEventListener('click', () => {
    const speechSynth = window.speechSynthesis;
    const inputText = userInput.value;
    const errorMsg = document.querySelector("#error-msg");

    if (!speechSynth.speaking && !inputText.trim().length) {
        errorMsg.innerText = `Nothing to convert! Enter text to Convert`;
        errorMsg.style.color = "red";
    }
    if (!speechSynth.speaking && inputText.trim().length) {
        errorMsg.innerText = " ";
        const newUtter = new SpeechSynthesisUtterance(inputText);
        speechSynth.speak(newUtter)
        convertBtn.innerText = `Sound is playing...`;

        newUtter.onend = () => {
            userInput.value = "";
            convertBtn.innerText = "Play converted sound";
        };
    }
});

