

let textarea = document.getElementById("textArea");
let wordsleft = document.getElementById("output");

function countWords(){
    let maxWords = 140;

    let words = textarea.value
    let numWords = words.length;
    let numWordsLeft = maxWords - numWords;

    if (numWordsLeft >= 0) {
        wordsleft.textContent = `You have ${numWordsLeft} words left`;
    } else {
        wordsleft.innerHTML = '<p style=" color:red;">You have exceeded your typing limit :( <p>';
        textarea.disabled = true;
    }
}





