let specBtn = document.querySelector('#specifications-btn'),
	productSlider = document.querySelector('.product-main__right'),
    productSpec = document.querySelector('.product-main__specifications'),
    productOverview = document.querySelector('#overview');

specBtn.addEventListener('click',function(){
	productSlider.classList.add('inactive');
	productSpec.classList.add('active');
});
productOverview.addEventListener('click',function(){
	productSpec.classList.remove('active');
	productSlider.classList.remove('inactive');
});


let counterMinus = document.querySelector('.counter__minus'),
	counterPlus = document.querySelector('.counter__plus'),
	counterCurrent = document.querySelector('.counter__current');
	counterCurrentNum = parseInt(counterCurrent.innerText);

	counterPlus.addEventListener('click',function(){
		counterCurrentNum++;
		counterCurrent.innerText = counterCurrentNum.toString();
	});
	counterMinus.addEventListener('click',function(){
		if (counterCurrentNum == 1) {
			counterCurrent.innerText = '1';
		} else counterCurrentNum--;
		counterCurrent.innerText = counterCurrentNum.toString();
	});
	

let productArrowLeft = document.querySelector('.arrow-left'),
    productArrowRight = document.querySelector('.arrow-right'),
    productItems = document.querySelectorAll('.product-slider__item'),
    dots = document.querySelectorAll('.dot'),
    productIndex = 0;

function currentSlide(n) {
	for(item of productItems) {
		item.classList.remove('active');
	};
	productItems[n].classList.add('active');
	for(item of dots) {
		item.classList.remove('active');
	}
	dots[n].classList.add('active');
};

productArrowRight.addEventListener('click',function(){
	if (productIndex == productItems.length-1){
		productIndex = 0;
	} else productIndex++;
	currentSlide(productIndex);
	console.log(productIndex);
});
productArrowLeft.addEventListener('click',function(){
	if (productIndex == 0){
		productIndex = productItems.length-1;
	} else productIndex--;
	currentSlide(productIndex);
	console.log(productIndex);
});
dots.forEach(function(item,index){
	item.addEventListener('click',function(){
		currentSlide(index);
	});
});


let productSize = document.querySelectorAll('.product__size__item');

productSize.forEach(function(item,index){
	item.addEventListener('click',function(){
		for(item of productSize){
			item.classList.remove('active');
		};
		productSize[index].classList.add('active');
	});
});