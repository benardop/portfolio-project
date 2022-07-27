let bugger_menu = document.querySelector("#bugger-menu");
let ul = document.querySelector("nav ul");
let navigation = document.querySelector("nav");
let btnClose = document.querySelector("#navbar");

let navigation_link = document.querySelectorAll(".nav-link");


bugger_menu.addEventListener("click", () => {
    ul.classList.toggle("show");
});

navigation_link.forEach((navLink) => 
    navLink.addEventListener("click", () => {
        ul.classList.remove("remove");
    })
);

btnClose.addEventListener("click", () => {
    ul.classList.toggle("show");
})
