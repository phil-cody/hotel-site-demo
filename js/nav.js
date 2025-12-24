let openMenuButton;
let navMenu;
let navLink;
let overlay;

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

	// ===== OPEN NAVIGATION MENU BY CLICKING ON BURGER BUTTON =====

	openMenuButton.addEventListener('click', () => {
		toggleNav();
	});

	// ===== CLOSE NAVIGATION MENU BY CLICKING ON LINK =====

	navLink.forEach((link) => {
		link.addEventListener('click', () => {
			closeNav();
		});
	});

	// ===== CLOSE NAVIGATION MENU BY CLICKING ON OVERLAY =====

	overlay.addEventListener('click', function () {
		closeNav();
	});
}