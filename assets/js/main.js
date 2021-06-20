
// Modal & simple validation

const siteAddress = document.getElementById("siteAddress");
const siteMail = document.getElementById("siteEmail");

const inputs = [siteAddress , siteMail];
inputs.forEach( input => {
    input.addEventListener("change" , (e)=> {
        if(e.target.value.trim().length > 0){
            input.classList.remove("input_error")
        }
    })
})

const formModal = new bootstrap.Modal(document.getElementById('formModal'));
document.getElementById("freescan").addEventListener("click" , function(e) {
    e.preventDefault();
    if(siteAddress.value.trim().length === 0 && siteAddress.value.trim().length === 0){
        inputs.forEach( input => input.classList.add("input_error"))
    } else {
        formModal.show()
    }
});


// toggling footer links
const arrows = document.querySelectorAll(".footer__links h4 img");

arrows.forEach( arrw => {
    arrw.addEventListener("click", ()=> {
        arrw.closest('.footer__links').classList.toggle("links_open");
    })
})