
let buttonShow = document.getElementById("show__button");
let block = document.getElementById('hidden');

buttonShow.addEventListener('click', showBlock);

function showBlock() {
	block.style = "display: flex";
}

// Inner button TEXT all elements !
let buttonText = document.querySelectorAll('.item--button');
for(let p = 0; p < buttonText.length; p++) {
	buttonText[p].innerHTML = 'Add to card';
}

var num = 70; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
});