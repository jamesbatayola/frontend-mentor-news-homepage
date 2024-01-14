const dropdownMenu = document.querySelector(".nav-menu-icon");
const dropdownClose = document.querySelector(".dropdown-close-icon");
const dropDownBG = document.querySelector(".dropdown-background");

// home menu icon eventListener
dropdownMenu.addEventListener("click", () => {
	dropDownBG.classList.toggle("active");
	dropdownMenu.classList.toggle("active");
});

// close menu icon eventListener
dropdownClose.addEventListener("click", () => {
	dropDownBG.classList.toggle("active");
	dropdownMenu.classList.toggle("active");
});

// changing the illustration src based on window width
let illustration = document.querySelector(".main-illustration");

function windowCheck() {
	if (window.innerWidth <= 700) {
		illustration.src = "/assets/images/image-web-3-mobile.jpg";
	} else {
		illustration.src = "/assets/images/image-web-3-desktop.jpg";
	}
}

window.addEventListener("resize", windowCheck);

windowCheck();
