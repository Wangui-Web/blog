let visibilityStatus = false;

function toggle() {

    let menuContent = document.querySelector(".menu-content");
    let getMenuContentUl = document.querySelector(".menu-content ul");
    let getMenuContentLinks = document.querySelectorAll(".menu-content ul li a")

    if (visibilityStatus === false) {
        menuContent.style.width = "200px";

        visibilityStatus = true;
    } else {
        menuContent.style.width = "0px";

        visibilityStatus = false;
    }
}
let visibilityStatus2 = false;

function visible() {

    let more = document.querySelector(".more");

    if (visibilityStatus2 === false) {
        more.style.display = "inline-block";

        visibilityStatus2 = true;
    } else {
        more.style.display = "none";

        visibilityStatus2 = false;
    }
}