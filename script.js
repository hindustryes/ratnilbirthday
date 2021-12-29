var a = new Audio("https://dl.dropboxusercontent.com/s/g6tgh4z4hwjp0e5/tujhejanamdinmubarakfunny.mp3?dl=0");

window.addEventListener('click',() => {
a.play();
});

function start(){
    var clab= document.querySelector("#clab")
   clab.style.display = "block";//this is your all tag in clab
   document.getElementById("loader").style.background="trasparent";
   document.getElementById("loader").style.display="none";
   document.getElementById("loader").style.transition ="2s";
   document.getElementById("loader").innerHTML =" ";
}

setInterval(start, 3000);