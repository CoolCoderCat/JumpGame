var character = document.getElementById("character");
var block = document.getElementById("block");
var playButton = document.getElementById("play-button");
var counter=0
var started=false
function jump(){
   if(character.classList == "animate"){return}
   character.classList.add("animate");
   setTimeout(function(){
    character.classList.remove("animate");

   },700);
}
var checkGameOver = setInterval(function() {
    if (!started) return
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<105 && blockLeft>0 && characterTop>=70){
        block.style.animation = "none";
        alert("Ouch! That hurt! Score: "+Math.floor(counter/200)+"\nPress OK to try again");
        counter=0;
        block.style.animation = "block 2s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/200);
    }
}, 10);
function play(event){
    event.stopPropagation()
    block.classList.add("block-animate")
    playButton.style.display="none"
    started=true
}