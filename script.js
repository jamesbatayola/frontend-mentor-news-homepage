const body = document.body;
const dropDownBG = document.querySelector(".dropdown-inactive");

body.addEventListener("click", (event) => {
	console.dir(event.target);
	let dropDown;
	if (!event.target.closest("nav")) {
		return;
	}
	if (event.target.closest("nav") && event.target.matches(".nav-menu-icon")) {
		dropDown = event.target.closest(".nav-menu-icon");
		dropDown.classList.toggle("active");
		dropDownBG.classList.toggle("dropdown-active");
	}
	if (!event.target.closest("dropdown") && !event.target.matches("nav-menu-icon")) {
		dropDownBG.classList.remove("dropdown-active");
		dropDown.classList.remove("active");
	}
});
