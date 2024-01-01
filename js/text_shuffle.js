const phrases = ["physical chemistry.", "machine learning.", "computational chemistry.", "AI chemistry."];
const textElement = document.getElementById('shuffle-text');
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let shuffleStep = 0;
const shufflesPerCharacter = 5;

function getRandomChar() {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return possible.charAt(Math.floor(Math.random() * possible.length));
}

function padStringWithNBSP(str, maxLength) {
    while (str.length < maxLength) {
        str += '\u00A0'; // Unicode for non-breakable space
    }
    return str;
}

function shuffleText() {
    let currentPhrase = phrases[currentPhraseIndex];
    let nextPhrase = phrases[(currentPhraseIndex + 1) % phrases.length];

    // Pad the shorter string with non-breakable spaces
    const maxLength = Math.max(currentPhrase.length, nextPhrase.length);
    currentPhrase = padStringWithNBSP(currentPhrase, maxLength);
    nextPhrase = padStringWithNBSP(nextPhrase, maxLength);

    if (currentCharIndex < maxLength) {
        let shuffledText = nextPhrase.substr(0, currentCharIndex);
        if (shuffleStep < shufflesPerCharacter) {
            shuffledText += getRandomChar() + currentPhrase.substr(currentCharIndex + 1);
            shuffleStep++;
        } else {
            shuffledText += nextPhrase.charAt(currentCharIndex) + currentPhrase.substr(currentCharIndex + 1);
            currentCharIndex++;
            shuffleStep = 0;
        }
        textElement.textContent = shuffledText;
        setTimeout(shuffleText, 8); // Speed of character shuffle
    } else {
        textElement.textContent = nextPhrase;

        currentCharIndex = 0;
        shuffleStep = 0;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        clearTimeout(shuffleTimer);
        shuffleTimer = setTimeout(shuffleText, 2000); // Delay before starting next shuffle
        return;
    }
}

let shuffleTimer = setTimeout(shuffleText, 2000); // Initial delay before starting shuffle






