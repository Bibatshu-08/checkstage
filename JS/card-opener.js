document.addEventListener("DOMContentLoaded", function(){


    // global variables section
    var cards=document.querySelectorAll(".cards"); //capture all divs
    var crossButton=document.getElementsByClassName("back-button");
    var container=document.getElementsByClassName("cards-container");
    var hackCard=document.getElementsByClassName("hackCard");


    cards.forEach(div=>{
        div.addEventListener("click", function(){//click event listener
            cards.forEach(unclicked=>{
                if(unclicked!==div){
                    unclicked.style.display="none"; //disappear elements that aren't clicked
                }
                hackCard[0].style.display="none";

                //space for children elements variable container

                container[0].style.overflowX="hidden";

                div.style.cursor="auto";//drag the left side a little more to the left 
                div.style.height="65vh";
                div.style.width="92vw";
                div.style.marginLeft="4vw";

                div.style.transition="height 1s ease";
                div.style.marginTop="10vh";



                crossButton[0].style.display="block";
                div.children[0].style.fontSize="180%";
 
                div.children[1].style.maxWidth="95%"; //change flex direction to row   

                div.children[1].children[0].children[0].style.width="250px"; //make the image width

                div.children[1].children[0].children[0].style.marginTop="4vh"; //make the image height consistent
                div.children[1].children[1].children[0].style.marginTop="4vh"; //make the image height consistent
                
                div.children[1].children[1].children[1].style.display="block"; //display the hidden title


                div.children[1].children[1].children[0].style.fontStyle="italic"; //make the tagline italic
                div.children[1].children[1].children[0].style.width="80%"; //make the tagline italic
                div.children[1].children[1].children[0].style.marginLeft="10%"; //make the tagline italic

                div.style.overflowY="auto"; //scroll the card downwards    
                div.children[2].style.display="block";  //show the image gallery list    

            });
        });
    });
});