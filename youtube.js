var menuToggle = document.querySelector(".menu");
var sideBar = document.querySelector(".side-bar");
let left = document.querySelector(".left-arrow");
let right = document.querySelector(".right-arrow");
var fullVideoSection = document.querySelector("#videos");
/* var closeToggle = document.querySelector('.closeToggle');
var section = document.querySelector('.video-section');
var section2 = document.querySelector('.video-container') */

/* menu toggle btn */
menuToggle.onclick = function(){
    sideBar.classList.toggle("reduced-menu");
    fullVideoSection.classList.toggle("video-full");
    /* filters.classList.toggle("video-full"); */
}
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
};

/* closeToggle.onclick = function(){
	section2.classList.toggle("Toggle");
}; */

