function calculatePriceWithDiscount(price, discount){
    let discountedPercentage = 100 - discount;
    let priceWithDiscount = (price * discountedPercentage) / 100;
    return priceWithDiscount;
}

function getResult(){
    let price = document.getElementById("inputPrice").value;
    let discount = document.getElementById("inputDiscount").value;
    let showResult = document.getElementById("showResult");
    let result = calculatePriceWithDiscount(price, discount);
    showResult.innerText = "El total a pagar con el descuento aplicado es de " + result + " pesos";
}