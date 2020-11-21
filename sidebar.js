function login() {
    if ($(".input-element").val() != "") {
        window.location.href = "details.html";
    } else {
        alert("Skriv in ditt personnummer för att fortsätta");
    }
}

function saveDetails() {
    if ($(".email-input").val() != "" && $(".mobile-input").val() != "") {
        window.location.href = "karta.html";
    } else {
        alert("Skriv in din epostaddress och mobilnummer för att fortsätta");
    }
}
