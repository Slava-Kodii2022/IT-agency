document.addEventListener("DOMContentLoaded", () => {

	const header = document.querySelector('.header-wrap');

	window.onscroll = () => {
		if (window.pageYOffset > 150) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	};

	const swiper = new Swiper('.swiper', {

		slidesPerView: 2,
		spaceBetween: 20,
		pagination: {
			el: '.revievs__dots',
			bulletActiveClass: '.revievs__dot-active',
			bulletClass: '.revievs__dot',
			clickable: true
		},

		navigation: {
			nextEl: '.revievs__button-next',
			prevEl: '.revievs__button-prev',
		},

	});

	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.menu');

	burger.addEventListener('click', () => {
		burger.classList.toggle('is-active');
		menu.classList.toggle('open');
	})

});