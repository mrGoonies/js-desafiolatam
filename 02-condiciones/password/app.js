const select1El = document.getElementById("select1-el")
const statusSelect1El = document.getElementById("statusSelect1-el")
const select2El = document.getElementById("select2-el")
const statusSelect2El = document.getElementById("statusSelect2-el")
const select3El = document.getElementById("select3-el")
const statusSelect3El = document.getElementById("statusSelect3-el")
const checkBtn = document.getElementById("check-btn")

checkBtn.addEventListener("click", function(){

    if (select1El.value === "9") {
        statusSelect1El.textContent = "Correct"
        statusSelect1El.style.color = "green"

    } else {
        statusSelect1El.textContent = "Incorrect"
        statusSelect1El.style.color = "red"
    }
    
    if (select2El.value === "1") {
        statusSelect2El.textContent = "Correct"
        statusSelect2El.style.color = "green"

    } else {
        statusSelect2El.textContent = "Incorrect"
        statusSelect2El.style.color = "red"
    }

    if (select3El.value === "1") {
        statusSelect3El.textContent = "Correct"
        statusSelect3El.style.color = "green"

    } else {
        statusSelect3El.textContent = "Incorrect"
        statusSelect3El.style.color = "red"
    }

})

select1El.value = ""
select2El.value = ""
select3El.value = ""
