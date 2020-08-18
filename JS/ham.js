document.addEventListener("DOMContentLoaded", function(){
	const menuBtn = document.querySelector('.menu-btn');
	let menuOpen = false;
	var hamOpened=document.getElementsByClassName("border");
	var listContainer=document.getElementsByClassName('hamburger-open-menu');
	menuBtn.addEventListener('click', () => {
		if(!menuOpen) {
			menuBtn.classList.add('open');
			hamOpened[0].style.height="70%";
			hamOpened[0].classList.add('opened');
			listContainer[0].style.visibility="visible";
			listContainer[0].style.height="75vh";
			document.body.style.position="fixed";
			document.body.style.width="100%";
			menuOpen = true;
		} else {
			menuBtn.classList.remove('open');
			hamOpened[0].style.height="0%";
			hamOpened[0].classList.remove('opened');
			listContainer[0].style.visibility="hidden";
			listContainer[0].style.height="0vh";
			document.body.style.position="static";
			menuOpen = false;
		}
	});
});