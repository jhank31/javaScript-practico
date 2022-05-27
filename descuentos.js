
function calcularPrecioDescuento(precio,descuento) {
    const totalDescuento = ((precio-descuento)*precio)/100
    return totalDescuento;
}

function calcularDescuento() {
    const InputPrice = document.getElementById("inputPrice");
    const priceValue = InputPrice.value;
    const inputDescuento = document.getElementById("InputDescuento");
    const descuentoValue = inputDescuento.value;

    const precioConDescuento = calcularPrecioDescuento(priceValue,descuentoValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "el precio total del descuento es" + precioConDescuento;

}