// nav.js
// variables
// initNav():
// – check if elements exist
// – event listeners
// –– open navigation menu
// –– close navigation menu by clicking on link
// –– close navigation menu by clicking on overlay
// openNav()
// closeNav()
// toggleNav()

// ===== VARIABLES =====

let openMenuButton;
let navMenu;
let navLink;
let overlay;

// ===== INIT FUNCTION =====

export function initNav() {

	// ===== FIND ELEMENTS =====

	openMenuButton = document.querySelector('.burger');
	navMenu = document.querySelector('.header__nav');
	navLink = document.querySelectorAll('.header__nav-link');
	overlay = document.querySelector('.overlay');

	// ===== CHECK IF ELEMENTS EXIST =====

	if (!openMenuButton || !navMenu || !overlay) {
		return;
	}

	// ===== EVENT LISTENERS =====

	// ===== Open navigation menu by clicking on burger button =====

	openMenuButton.addEventListener('click', () => {
		toggleNav();
	});

	// ===== Close navigation menu by clicking on link =====

	navLink.forEach((link) => {
		link.addEventListener('click', () => {
			closeNav();
		});
	});

	// ===== Close navigation menu by clicking on overlay =====

	overlay.addEventListener('click', function () {
		closeNav();
	});
}

// ===== FUNCTION FOR OPEN NAVIGATION MENU =====

function openNav() {
	navMenu.classList.add('nav__open');
	openMenuButton.classList.add('nav__open');
	overlay.classList.add('nav__open');
}

// ===== FUNCTION FOR CLOSE NAVIGATION MENU =====

function closeNav() {
	navMenu.classList.remove('nav__open');
	openMenuButton.classList.remove('nav__open');
	overlay.classList.remove('nav__open');
}

// ===== FUNCTION FOR TOGGLE NAVIGATION MENU =====

function toggleNav() {
	if (navMenu.classList.contains('nav__open')) {
		closeNav();
	} else {
		openNav();
	}
}