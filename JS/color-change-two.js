document.addEventListener("DOMContentLoaded", function(){
    var buttons=document.querySelectorAll(".icon-space");

    var prof=document.getElementById("staff").offsetHeight;
    var about=document.getElementById("about").offsetHeight;
    var objectives=document.getElementById("objectives").offsetHeight;
    console.log(about);
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        
    if (document.body.scrollTop > (about+prof) || document.documentElement.scrollTop >(about+prof)) {
        buttons[2].children[1].children[0].setAttribute("fill","#6f8083");
        buttons[1].children[1].children[0].setAttribute("fill","#bdc2db");
        buttons[0].children[1].children[0].setAttribute("fill","#bdc2db");
        buttons[2].children[1].children[1].children[0].style.fontWeight="700";
        buttons[1].children[1].children[1].children[0].style.fontWeight="300";
        buttons[0].children[1].children[1].children[0].style.fontWeight="300";

    } else if(document.body.scrollTop > prof  || document.documentElement.scrollTop > prof) {
        buttons[1].children[1].children[0].setAttribute("fill","#6f8083");
        buttons[2].children[1].children[0].setAttribute("fill","#bdc2db");
        buttons[0].children[1].children[0].setAttribute("fill","#bdc2db");
        buttons[1].children[1].children[1].children[0].style.fontWeight="700";
        buttons[2].children[1].children[1].children[0].style.fontWeight="300";
        buttons[0].children[1].children[1].children[0].style.fontWeight="300";
    }
    else{
        buttons[0].children[1].children[0].setAttribute("fill","#6f8083");
        buttons[1].children[1].children[0].setAttribute("fill","#bdc2db");
        buttons[2].children[1].children[0].setAttribute("fill","#bdc2db");
        buttons[0].children[1].children[1].children[0].style.fontWeight="700";
        buttons[1].children[1].children[1].children[0].style.fontWeight="300";
        buttons[2].children[1].children[1].children[0].style.fontWeight="300";
    }
    }

    buttons.forEach(button=>{
        button.addEventListener("click", function(){
            button.children[1].children[0].setAttribute("fill","#6f8083");
            button.children[1].children[1].children[0].style.color="#141414";
            button.children[1].children[1].children[0].style.fontWeight="700";
            buttons.forEach(unbutton=>{
                if(unbutton!=button){
                    unbutton.children[1].children[0].setAttribute("fill", "#bdc2db");
                    unbutton.children[1].children[1].children[0].style.color="gray";
                    unbutton.children[1].children[1].children[0].style.fontWeight="300";
                }
            });
        });
    });
});