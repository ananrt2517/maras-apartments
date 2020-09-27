
console.log("asda");

document.querySelector("#submit-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const firstName = document.querySelector("#first_last_name").value
    const phone = document.querySelector("#phone-number").value
    const message = document.querySelector("#message").value
    window.open("mailto:info@marascoast.com?subject=Message From Website&body=Name: " + firstName + "<br>Phone Number: " + phone + "<br> Message: " + message )
})