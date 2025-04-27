const stickerOneEl = document.getElementById("sticker-1-el")
const stickerTwoEl = document.getElementById("sticker-2-el")
const stickerThreeEl = document.getElementById("sticker-3-el")
const messageEl = document.getElementById("message-el")
const validateBtn = document.getElementById("validate-btn")

let totalQuantityStickers = 0

/**
 * Add input values ​​in the HTML and store them in the totalQuantityStickers variable
 * to validate that its value is greater than or equal to zero
 *  and not have problems with negative values
 * @returns {number} total sum for input quantities for stickers.
 */
function getTotalStickers() {
    totalQuantityStickers = parseInt(stickerOneEl.value) + parseInt(stickerTwoEl.value) + parseInt(stickerThreeEl.value)

    // Validate value for totalQuantityStickers variable
    console.log(`Total Stickers: ${totalQuantityStickers}`)

    if (totalQuantityStickers >= 0) {
        return totalQuantityStickers
    }

    return 0
}

/**
 * We reset the values ​​entered by the user from the HTML
 * @returns {void} 
 */
function resetValuesForStickers() {
    stickerOneEl.value = 0
    stickerTwoEl.value = 0
    stickerThreeEl.value = 0    

    return 
}

validateBtn.addEventListener("click", function() {
    let total = getTotalStickers()

    if (total === 0) {
        messageEl.textContent = "You must request at least one gift sticker"
        messageEl.style.color = "#ccc"
        
    }else if (total <= 10) {
        messageEl.textContent = "Perfect, we'll get it to your home as soon as possible!"
        messageEl.style.color = "green"
        messageEl.style.fontWeight = "bold"

    } else if (total > 10) {
        messageEl.textContent = "As it is a gift, you only have to choose a maximum of 10 stickers."
        messageEl.style.color = "red"

    }

    resetValuesForStickers()
})