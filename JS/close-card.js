document.addEventListener("DOMContentLoaded", function(){
    // global variables section
    var cards=document.querySelectorAll(".cards"); //capture all divs
    var crossButton=document.getElementsByClassName("back-button");
    var container=document.getElementsByClassName("cards-container");
    var hackCard=document.getElementById("hack-card");



    crossButton[0].addEventListener("click", function(){
        crossButton[0].style.display="none";
        cards.forEach(div=>{
            div.style.display="block"; //bring back the lost cards
            div.style.cursor="pointer"; //change the cursor style
            div.style.height="70vh";
            div.style.minWidth="20vw";
            div.style.marginTop="2vh"; //make sure the div goes a little higher
            div.style.marginLeft="4vw";//get to default left settings   
            div.style.cursor="pointer";//change cursor to pointer
            container[0].style.overflowX="scroll";

            hackCard.style.display="block";

            div.children[0].style.display="block"; //bring back the main title
            div.children[1].style.maxWidth="80%";
            div.children[1].style.flexDirection="column"; //change flex direction to column   
            div.children[1].style.marginTop="4vh"; //change flex direction to row   


            div.children[1].children[0].style.marginRight="0vw"; //increase the margin between content and image
            div.children[1].children[0].children[0].style.width="100%"; //change the image width to 100%
            div.children[1].children[0].children[0].style.marginTop="0vh"; //make the image height consistent
            div.children[1].children[1].children[2].style.display="none"; //hide the hidden main content
            div.children[1].children[1].children[0].style.display="none"; //hide the hidden title
            div.children[1].children[1].style.marginTop="3vh"; //make the content area go a little up
            div.children[1].children[1].style.marginLeft="0px"; //make the content area go a little left

            div.children[1].children[1].children[1].style.fontStyle="normal"; //make the content area go a little left
            div.children[1].children[1].children[1].style.marginTop="0vw"; //make the content area go a little left

            div.style.overflowY="hidden"; //hide the scroll the card downwards scrollbar 
            div.children[2].style.display="none";  //hide the image gallery list   
            // gridBox.style.boxShadow="inset 10px 5px 20px -6px #141414";
            
        });
    });
});