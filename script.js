var nav = document.querySelector(".mobnav")
var navButton = document.getElementById("navButton")
var remove = document.getElementById("remove")
var navsec = document.getElementById("navsection")

navButton.addEventListener("click", () => {
    nav.style.display = "block"
});

remove.addEventListener("click", () => {
    nav.style.display = "none"
});

navsec.addEventListener("click", () => {
    nav.style.display = "none"
});