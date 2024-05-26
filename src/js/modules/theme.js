import { Popup } from "../helpers/popup";

export class ChangeTheme extends Popup {
	constructor() {
		super();

		this.changeThemeButtons = document.querySelectorAll(".chenge-button");
        this.root = document.querySelector(":root")
	}

	themeChange() {
		let activeTheme = localStorage.getItem('theme'); // Проверяем есть ли в LocalStorage записано значение для 'theme' и присваиваем его переменной.

        if(activeTheme === null || activeTheme === 'light') { // Если значение не записано, или оно равно 'light' - применяем светлую тему
            this.root.classList.add("dark");
        } else if (activeTheme === 'dark') { // Если значение равно 'dark' - применяем темную
            this.root.classList.add("light");
        }

        this.changeThemeButtons.forEach(button =>{

            button.addEventListener("click", function () {

                this.root = document.querySelector(":root")

				this.root.classList.toggle("light")
				this.root.classList.toggle("dark")

				let theme = this.dataset.theme;
			    localStorage.setItem('theme', theme);

            });
        });

	}
	}





