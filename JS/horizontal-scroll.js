document.addEventListener('DOMContentLoaded', function(){

(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementsByClassName('cards-container')[0].scrollLeft -= (delta*10); // Multiplied by 40
        // e.preventDefault();
    }
    if (document.getElementsByClassName('cards-container')[0].addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementsByClassName('cards-container')[0].addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.getElementsByClassName('cards-container')[0].addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementsByClassName('cards-container')[0].attachEvent("onmousewheel", scrollHorizontally);
    }
})();

});