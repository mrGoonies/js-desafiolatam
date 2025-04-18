const priceEl = document.getElementById("price-el")
const quantEl = document.getElementById("quant-el")
const totalBtn = document.getElementById("total-btn")
const incrementBtn = document.getElementById("increment-btn")
const decrementBtn = document.getElementById("decrement-btn")
const totalEl = document.getElementById("total-el")
let productQuantity = 0
let totalPrice = 0
const productPrice = 985999

priceEl.textContent += "$" + productPrice
quantEl.textContent = productQuantity

incrementBtn.addEventListener("click", function() {
    productQuantity += 1
    quantEl.textContent = productQuantity
})

decrementBtn.addEventListener("click", function() {
    if (productQuantity > 0) {
        productQuantity -= 1
        quantEl.textContent = productQuantity
    }
})

totalBtn.addEventListener("click", function(){
    if (productQuantity > 0) {
        totalPrice = productPrice * productQuantity

        totalEl.textContent = "$ " + totalPrice
    } else {
        alert("Por favor, seleccione una cantidad mayor a 0 para calcular el total a pagar.")
    }
})

