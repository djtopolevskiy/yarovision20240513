function mobileNav() {
	// Mobile nav button

	const navIcon = document.querySelector(".icon-menu");
	const nav = document.querySelector(".mobile-nav");
	const menuOpen = document.querySelector(".menu-open");
	const navhtml = document.querySelector("html");

	navIcon.onclick = function () {
		nav.classList.toggle("mobile-nav--open");
		// menuIcon.classList.toggle(".menu-open");
		// this.html.classList.add("menu-open");
		document.body.classList.toggle("no-scroll");
	};

	nav.onclick = function () {
		menuOpen.classList.toggle(".icon-menu");
	};
}

export default mobileNav;
