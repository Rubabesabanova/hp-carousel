var next=document.querySelector('.next')
var prev=document.querySelector('.prev')
var card=document.querySelectorAll('.card-item')
var card_wrapper=document.querySelector(".card-wrapper")
var count=0;
var length=25;
card_wrapper.style.transform="translateX(-"+length+"px)";

next.addEventListener('click', function(){
    count++;
    if (count>card.length-3){
        count=0;
    }
    console.log(count);
    length=25+count*315;
    card_wrapper.style.transform="translateX(-"+length+"px)";
});
prev.addEventListener('click', function(){
    count--;
    if (count<0){
        count=card.length-3;
    }
    console.log(count);
    length=25+count*315;
    card_wrapper.style.transform="translateX(-"+length+"px)";
});