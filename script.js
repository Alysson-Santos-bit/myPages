const myElement = document.getElementById("myElement");
const myText = document.getElementById("myText");

function insertText() {
    myText.innerHTML = "Treino dificil, jogo facil!";
}

myElement.addEventListener("click", insertText);



       
