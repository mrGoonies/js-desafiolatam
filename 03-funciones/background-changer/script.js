const body = document.querySelector("body")
const pElement = document.getElementById("p-element")
const changeColorButton = document.getElementById("changeColorButton")

changeColorButton.addEventListener("click", () => {
    
    if (body.style.backgroundColor !== "rgb(157, 181, 178)") {
        body.style.backgroundColor = "#9DB5B2"
        changeColorButton.style.backgroundColor = "#3B413C"
        changeColorButton.style.color = "#FFFF"
        
    } else {
        
        body.style.backgroundColor = "#3B413C"
    }


})

