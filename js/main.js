const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav-btn');
const navLinks = document.querySelectorAll('.nav__link');
const scrollTopBtn = document.querySelector('.scroll-top-btn');
const footerYear = document.querySelector('.footer-year');
let menuOpen = false;

const expandNav = () => {
	if (window.scrollY > 150) {
		nav.classList.add('active');
		scrollTopBtn.classList.add('active');
	} else {
		nav.classList.remove('active');
		scrollTopBtn.classList.remove('active');
	}
};

const toggleMenu = () => {
	if (!menuOpen) {
		nav.classList.add('open');
		navBtn.classList.add('open');
		menuOpen = true;
	} else {
		nav.classList.remove('open');
		navBtn.classList.remove('open');
		menuOpen = false;
	}
};

const accDate = new Date().getFullYear();
footerYear.textContent = accDate;

// LISTENERS
navLinks.forEach((link) => {
	link.addEventListener('click', toggleMenu);
});
navBtn.addEventListener('click', toggleMenu);
window.addEventListener('scroll', expandNav);
