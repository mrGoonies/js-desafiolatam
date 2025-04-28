let statusBorder = false
const iframeEl = document.getElementById("iframe-el")
const changeBorderBtn = document.getElementById("changeBorder-btn")


changeBorderBtn.addEventListener("click", function() {

    if (statusBorder === false) {
        iframeEl.style.border = "5px solid green"
        statusBorder = true

    } else {
        iframeEl.style.border = "none"
        statusBorder = false
    
    }
})
