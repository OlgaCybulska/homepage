

let button = document.querySelector(".js-button");
let kontakt = document.querySelector(".js-footer");
let themeName = document.querySelector(".js-themeName")


button.addEventListener("click", () => {
    kontakt.classList.toggle("js-footer--background");
    themeName.innerText = kontakt.classList.contains("js-footer--background") ? "Nie" : "Tak"
});

