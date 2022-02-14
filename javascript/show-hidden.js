let button = document.getElementById("button");
let showResultContainer = document.getElementById("result");

button.addEventListener("click", showHidden);

function showHidden(){
    showResultContainer.setAttribute("style", "display: grid;");
}