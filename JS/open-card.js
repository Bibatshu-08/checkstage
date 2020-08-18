document.addEventListener("DOMContentLoaded", function(){


    // global variables section
    var cards=document.querySelectorAll(".cards"); //capture all divs
    var crossButton=document.getElementsByClassName("back-button");
    var container=document.getElementsByClassName("cards-container");
    var hackCard=document.getElementById("hack-card");


    cards.forEach(div=>{
        div.addEventListener("click", function(){//click event listener
            cards.forEach(unclicked=>{
                if(unclicked!==div){
                    unclicked.style.display="none"; //disappear elements that aren't clicked
                }

                //space for children elements variable container

                container[0].style.overflowX="hidden";
                div.style.cursor="auto";//drag the left side a little more to the left 
                div.style.minWidth="90vw";
                div.style.height="90%";
                div.style.transition="height 1s ease";
                div.style.marginTop="6vh";
                div.style.marginLeft="2vw";

                hackCard.style.display="none";


                crossButton[0].style.display="block";
                div.children[0].style.display="none"; //remove the main title
                div.children[1].style.flexDirection="row"; //change flex direction to row   
                div.children[1].style.marginTop="0vh"; //change flex direction to row   
                div.children[1].style.marginLeft="2vw"; //change flex direction to row   
                div.children[1].style.maxWidth="95%"; //change flex direction to row   
                div.children[1].style.justifyContent="space-evenly"; //change flex direction to row   

                div.children[1].children[0].style.marginRight="5vw"; //increase the margin between content and image

                div.children[1].children[0].children[0].style.width="400px"; //make the image width
                div.children[1].children[0].children[0].style.marginTop="4vh"; //make the image height consistent
                
                div.children[1].children[1].children[2].style.display="block"; //display the hidden main content
                
                div.children[1].children[1].children[0].style.display="block"; //display the hidden title

                div.children[1].children[1].style.marginTop="0vh"; //make the content area go a little down
                div.children[1].children[1].style.marginLeft="-30px"; //make the content area go a little left

                div.children[1].children[1].children[1].style.fontStyle="italic"; //make the tagline italic
                div.children[1].children[1].children[1].style.marginTop="4vw"; //make the content area go a little left

                // div.children[1].children[1].children[1].style.fontSize="125%"; //increase the font size of main content

                div.style.overflowY="auto"; //scroll the card downwards    
                div.children[2].style.display="block";  //show the image gallery list    
            });
        });
    });
});