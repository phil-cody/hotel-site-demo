const openMenuButton = document.querySelector('.burger');
const navMenu = document.querySelector('.header__nav');
const navLink = document.querySelectorAll('.header__nav-link');
const overlay = document.querySelector('.overlay');

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

// ===== EVENT LISTENERS =====

// ===== OPEN NAVIGATION MENU BY CLICKING ON BURGER BUTTON =====

openMenuButton.addEventListener('click', () => {
	if (navMenu.classList.contains('nav__open')) {
		closeNav();
	} else {
		openNav();
	}
});

// ===== CLOSE NAVIGATION MENU BY CLICKING ON LINK =====

navLink.forEach((link) => {
	link.addEventListener('click', () => {
		closeNav();
	});
});

// ===== CLOSE NAVIGATION MENU BY CLICKING ON OVERLAY =====

overlay.addEventListener('click', function(event) {
	let target = event.target;
	
	if (navMenu.classList.contains('nav__open')) {
		if (!navMenu.contains(target)) {
			if (!openMenuButton.contains(target)) {
				closeNav();
			}
		}
	}
});