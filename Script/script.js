let firstimage = document.getElementById("firstimage");
let secondimage = document.getElementById("secondimage");
let thirdimage = document.getElementById("thirdimage");
let firstarticle = document.getElementById("firstarticle");
let secondarticle = document.getElementById("secondarticle");
let thirdarticle = document.getElementById("thirdarticle");
function changecolor(){
    firstarticle.style.color = "#00ffb3";
}
function red(){
    secondarticle.style.color = "#ff0000";
}
function violet(){
    thirdarticle.style.color = "#a832a6";
}
firstimage.addEventListener("click",function(){
    firstarticle.style.color = "#00e5ff";
    setTimeout(changecolor,1000);
})
firstimage.addEventListener("dblclick",function(){
    firstarticle.style.color = "black";
})
secondimage.addEventListener("click",function(){
    setTimeout(red,1000);
})
secondimage.addEventListener("dblclick",function(){
    secondarticle.style.color = "black";
})
thirdimage.addEventListener("click",function(){
    setTimeout(violet,1000);
})
thirdimage.addEventListener("dblclick",function(){
    thirdarticle.style.color = "black";
})