const menuToggler = document.querySelector(".openMenu");
const menuClose = document.querySelector('.closeMenu');
const overlayer = document.querySelector(".sector");

menuToggler.onclick = function(){
    overlayer.style.display = "block";
    overlayer.classList.toggle('overlay')
}

menuClose.addEventListener('click', function () {
    overlayer.style.display = "none";
    overlayer.classList.remove('overlay')
});



let left = document.querySelector(".left-arrow");
let right = document.querySelector(".right-arrow");

/* left scroll btn */
left.onclick = function(){
    const left = document.querySelector(".filters-section");
    left.scrollBy(-200,0);
}

/* right scroll btn */
right.onclick = function(){
    const right = document.querySelector(".filters-section");
    right.scrollBy(200,0);
}
/* left btn is invisible unless the right btn is clicked */
right.addEventListener('click', function(){
    left.classList.add('left');
});
/* search function */
function search_videos() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('video-container');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}