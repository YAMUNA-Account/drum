var n=document.querySelectorAll(".drum").length;
for(var i=0;i< n;i++){
document.getElementsByTagName("button")[i].addEventListener("click",function (){
   var buttondone = this.innerHTML;
   buttonDid(buttondone);
   buttonAnimation(buttondone);
})
}

document.addEventListener("keypress",function(event){
   
   buttonDid(event.key);
   buttonAnimation(event.key);
});
function buttonDid(key){
   switch (key) {
      case "d":
         var crash=new Audio("./sounds/crash.mp3");
         crash.play();
         break;
      case "r":
         var kick=new Audio("./sounds/kick-bass.mp3");
         kick.play();
         break;
      case "u":
         var snare=new Audio("./sounds/snare.mp3");
         snare.play();
         break;
      case "m":
         var tom1=new Audio("./sounds/tom-1.mp3");
         tom1.play();
         break;
      case "k":
         var tom2=new Audio("./sounds/tom-2.mp3");
         tom2.play();
         break;
      case "i":
         var tom3=new Audio("./sounds/tom-3.mp3");
         tom3.play();
         break;
      case "t":
         var tom4=new Audio("./sounds/tom-4.mp3");
         tom4.play();
         break;

   
      default:
         break;
   }

}
function buttonAnimation(currentKey){
   var activatedKey = document.querySelector("."+currentKey);
   activatedKey.classList.add("pressed");
   setTimeout(function(){
      activatedKey.classList.remove("pressed");
   },100);
}