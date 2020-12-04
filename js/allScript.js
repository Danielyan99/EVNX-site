
// Burger
let burger = document.getElementById('burger-btn'),
    nav = document.querySelector('.header__nav'),
    headerItems = document.querySelectorAll('.header-item');

burger.addEventListener('click', function(){
	headerItems[0].classList.toggle('fly-bottom');
	this.classList.toggle('close');
	nav.classList.toggle('active');
});

