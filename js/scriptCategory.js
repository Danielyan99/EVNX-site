let categoryItems = document.querySelectorAll('.category-main__item');
let all = document.querySelectorAll('.all');
let modularHelmet = document.querySelectorAll('.modular-helmet');
let halfFace = document.querySelectorAll('.half-face-helmet');
let fullFace = document.querySelectorAll('.full-face-helmet');

let allBtn = document.querySelector('#all__btn');
let modularHelmetBtn = document.querySelector('#modular-helmet__btn');
let halfFaceBtn = document.querySelector('#half-face__btn');
let fullFaceBtn = document.querySelector('#full-face__btn');


function showAll() {
	categoryItems.forEach(function(item,index){
		item.classList.remove('inactive');
	});
}
allBtn.addEventListener('click',function(){
	showAll();
});
modularHelmetBtn.addEventListener('click',function(){
	showAll();
	halfFace.forEach(function(item,index){
		item.classList.add('inactive');
	});
	fullFace.forEach(function(item,index){
		item.classList.add('inactive');
	});
});
halfFaceBtn.addEventListener('click',function(){
	showAll();
	modularHelmet.forEach(function(item,index){
		item.classList.add('inactive');
	});
	fullFace.forEach(function(item,index){
		item.classList.add('inactive');
	});
});
fullFaceBtn.addEventListener('click',function(){
	showAll();
	modularHelmet.forEach(function(item,index){
		item.classList.add('inactive');
	});
	halfFace.forEach(function(item,index){
		item.classList.add('inactive');
	});
});
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