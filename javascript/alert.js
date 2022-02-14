let warning = document.getElementById("warning");
let textWarning = document.getElementById("textWarning");

button.addEventListener("click", alert);

function alert(){
    if(price.value.length == 0 && discount.value.length == 0){
        showResult.innerHTML = "";
        showResultContainer.setAttribute("style", "display: none;");
        warning.setAttribute("style", "display: grid;")
        textWarning.innerHTML = "Debes ingresar el total a pagar y el descuento para realizar este calculo";
    }else if(price.value.length == 0){
        showResult.innerHTML = "";
        showResultContainer.setAttribute("style", "display: none;");
        warning.setAttribute("style", "display: grid;")
        textWarning.innerHTML = "Debes ingresar el total a pagar para realizar este calculo";
    }else if(discount.value.length == 0){
        showResult.innerHTML = "";
        showResultContainer.setAttribute("style", "display: none;");
        warning.setAttribute("style", "display: grid;")
        textWarning.innerHTML = "Debes ingresar el descuento para realizar este calculo";
    }else if(!price.value.length == 0 && !discount.value.length == 0){
        warning.setAttribute("style", "display: none;")
    }
}