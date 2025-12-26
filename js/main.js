import { initNav } from "./nav.js";
import { initForm } from "./form.js";
import { initI18n, setLanguage } from "./i18n.js";

initNav();
initForm();
initI18n();

const langButton = document.querySelectorAll('.header__lang-btn');

langButton.forEach((btn) => {
	btn.addEventListener('click', () => {
		const lang = btn.dataset.lang;

		setLanguage(lang);

		initI18n();

		langButton.forEach((btn) => {
			btn.classList.remove('is-active');
		});
		btn.classList.add('is-active');
	});
});