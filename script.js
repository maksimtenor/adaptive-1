
let buttonShow = document.getElementById("show__button");
let block = document.getElementById('hidden');

buttonShow.addEventListener('click', showBlock);

function showBlock() {
	block.style = "display: flex";
}
