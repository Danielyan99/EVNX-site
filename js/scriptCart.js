// Scroll
let scrollUp = document.getElementById('scroll');

window.addEventListener('scroll', function(){
	if (document.documentElement.scrollTop > 120) {
		scrollUp.classList.add('active');
	} else scrollUp.classList.remove('active');

});

scrollUp.addEventListener('click', function(){
	window.scroll({
		top: 0,
		behavior: "smooth",
	})
});
// Scroll