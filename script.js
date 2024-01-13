const body = document.body;

body.addEventListener("click", (event) => {
	if (!event.target.closest("nav")) {
		return;
	}
	if (event.target.closest("nav")) {
		console.log("jake");
	}
});
