
{
    const onChangeBackground = () => {
        kontakt.classList.toggle("js-footer--background");
        themeName.innerText = kontakt.classList.contains("js-footer--background") ? "Nie" : "Tak";
    }


    const button = document.querySelector(".js-button");
    const kontakt = document.querySelector(".js-footer");
    const themeName = document.querySelector(".js-themeName")

    button.addEventListener("click", onChangeBackground);
}
