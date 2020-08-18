document.addEventListener("DOMContentLoaded", function(){
    // global variables section
    var cards=document.querySelectorAll(".cards"); //capture all divs
    var crossButton=document.getElementsByClassName("back-button");
    var container=document.getElementsByClassName("cards-container");
    var hackCard=document.getElementsByClassName("hackCard");


    crossButton[0].addEventListener("click", function(){
        crossButton[0].style.display="none";
        cards.forEach(div=>{
            div.style.display="block"; //bring back the lost cards
            // div.style.minWidth="30vw";
            hackCard[0].style.display="block";

            div.style.height="60vh";
            div.style.width="20vw";

            div.style.marginTop="0vh"; //make sure the div goes a little higher
            div.style.marginLeft="2vw";//get to default left settings   

            container[0].style.overflowX="scroll";

            div.children[0].style.fontSize="90%";
            div.children[1].style.maxWidth="85%";



            div.children[1].children[0].children[0].style.width="100%"; //change the image width to 100%
            div.children[1].children[0].children[0].style.marginTop="0vh"; //make the image height consistent
            div.children[1].children[1].children[0].style.marginTop="0vh"; //make the image height consistent


            div.children[1].children[1].style.marginTop="1vh"; //make the content area go a little up
            div.children[1].children[1].style.marginLeft="0px"; //make the content area go a little left

            div.children[1].children[1].children[0].style.fontStyle="normal"; //make the content area go a little left
            div.children[1].children[1].children[0].style.marginTop="2vh"; //make the content area go a little left
            // div.children[1].children[1].children[0].style.fontSize="100%"; //make the content area go a little left

            div.children[1].children[1].children[1].style.display="none"; //display the hidden title


            div.style.overflowY="hidden"; //hide the scroll the card downwards scrollbar 
            div.children[2].style.display="none";  //hide the image gallery list   

            div.children[1].children[1].children[0].style.width="95%"; //make the tagline italic
            div.children[1].children[1].children[0].style.marginLeft="2%"; //make the tagline italic

            // gridBox.style.boxShadow="inset 10px 5px 20px -6px #141414";
            
        });
    });
});