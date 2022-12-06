let divEl = document.getElementById("nav-el");
let menuEl = document.getElementById("click-el");
let overEl = document.getElementById("over-el");
let closeEl = document.getElementById("close-menu");
function renderWidth() {
    let saveScreenWidth = window.innerWidth;
    if (saveScreenWidth <= 996) {
        divEl.className = "menu-bar1";
    } else {
        divEl.className = "menu-bar2";
    }

}

window.addEventListener("resize", function () {
    renderWidth();
})

function openMenu() {
    // console.log("button clicked");
    overEl.style.height = "100%";
}
menuEl.addEventListener("click", openMenu, false);

function closeMenu() {
    // console.log("button clicked");
    overEl.style.height = "0%";
}

closeEl.addEventListener("click", closeMenu, false);