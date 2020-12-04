// **header-slider
let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
let sliders = document.querySelectorAll('.slider-main');
let sliderIndex = 0;
arrowRight.addEventListener('click',function(){
	if(sliderIndex == sliders.length-1){
		sliderIndex=0;
	} else sliderIndex++;
	sliders.forEach(function(item){
		item.classList.remove('active');
		sliders[sliderIndex].classList.add('active');
	});
});

arrowLeft.addEventListener('click',function(){
	if(sliderIndex == 0){
		sliderIndex=sliders.length-1;
	} else sliderIndex--;
	sliders.forEach(function(item){
		item.classList.remove('active');
		sliders[sliderIndex].classList.add('active');
	});
});

// **header-slider
// **product-slider
let productArrowLeft = document.querySelector('.product-arrow__left');
let productArrowRight = document.querySelector('.product-arrow__right');
let products = document.querySelectorAll('.new-product__item');
let productIndex = 0;

productArrowRight.addEventListener('click',function(){
	for(item of products) { 
		item.classList.remove('show');
		item.classList.remove('active');
		item.classList.remove('item__mb');
	};
	if (productIndex >= products.length-3) {
		products[productIndex-(products.length-3)].classList.add('show');
		products[productIndex-(products.length-3)].classList.add('active')
		products[productIndex-(products.length-3)].classList.add('item__mb');
		products[productIndex-(products.length-4)].classList.add('show');
		products[productIndex-(products.length-5)].classList.add('show');
		productIndex = 0;
	} 
	else {
		products[productIndex+1].classList.add('show');
		products[productIndex+1].classList.add('active')
		products[productIndex+1].classList.add('item__mb');
		products[productIndex+2].classList.add('show');
		products[productIndex+3].classList.add('show');
		productIndex++;
	}
});
productArrowLeft.addEventListener('click',function(){
	for(item of products) { 
		item.classList.remove('show');
		item.classList.remove('active');
		item.classList.remove('item__mb');
	};
	if (productIndex <= 2) {
		productIndex = 0;
		products[productIndex+(products.length-3)].classList.add('show');
		products[productIndex+(products.length-3)].classList.add('active')
		products[productIndex+(products.length-3)].classList.add('item__mb');
		products[productIndex+(products.length-2)].classList.add('show');
		products[productIndex+(products.length-1)].classList.add('show');
		productIndex = products.length-1;
	} 
	else {
		products[productIndex-1].classList.add('show');
		products[productIndex-2].classList.add('show');
		products[productIndex-3].classList.add('show');
		products[productIndex-3].classList.add('active')
		products[productIndex-3].classList.add('item__mb');
		productIndex--;
	}
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