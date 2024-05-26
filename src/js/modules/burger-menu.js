import { Popup } from "../helpers/popup";

// const nav = document.querySelector(".mobile-nav");

// const navOpen = document.querySelector(".mobile-nav--open");

export class BurgerMenu extends Popup {
	constructor() {
		super();

		this.burgerButton = document.querySelector(".icon-menu");
		this.nav = document.querySelector(".mobile-nav");
	}

	/**
	 * Initialize the menu functionality.
	 */
	init() {
		if (this.burgerButton) {
			document.addEventListener("click", ({ target }) => {
				if (target.closest(".icon-menu")) {
					this.html.classList.toggle("menu-open");
					this.nav.classList.toggle("mobile-nav--open");
					this.toggleBodyLock(this.isMenuOpen);
				}
			});
		}
	}

	/**
	 * Open the menu.
	 */

	menuOpen() {
		this.toggleBodyLock(true);
		this.html.classList.add("menu-open");
	}

	/**
	 * Close the menu.
	 */
	menuClose() {
		this.toggleBodyLock(false);
		this.html.classList.remove("menu-open");
	}

	get isMenuOpen() {
		return this.html.classList.contains("menu-open");
	}
}
