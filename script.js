const dropdownMenu = document.querySelector(".nav-menu-icon");
const dropdownClose = document.querySelector(".dropdown-close-icon");
const dropDownBG = document.querySelector(".dropdown-background");

dropdownMenu.addEventListener("click", () => {
	dropDownBG.classList.toggle("active");
	dropdownMenu.classList.toggle("active");
});

dropdownClose.addEventListener("click", () => {
	dropDownBG.classList.toggle("active");
	dropdownMenu.classList.toggle("active");
});
