let price = document.getElementById("inputPrice");
let discount = document.getElementById("inputDiscount");
let showResult = document.getElementById("showResult");

function calculatePriceWithDiscount(price, discount){
    let discountedPercentage = 100 - discount;
    let priceWithDiscount = (price * discountedPercentage) / 100;
    return priceWithDiscount;
}

function getResult(){
    let result = calculatePriceWithDiscount(price.value, discount.value);
    showResult.innerHTML = "El total a pagar es de " + result + " pesos";
}