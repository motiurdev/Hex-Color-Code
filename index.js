var targetButton = document.querySelector("button");
var valueShow = document.querySelector(".show_result");
var colorName = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

targetButton.addEventListener("click",function(){
    var hex = "#";
    for(var i=0;i<6;i++){
        var colorRandom = Math.floor(Math.random()*colorName.length);
        hex += colorName[colorRandom];
    }
    valueShow.innerHTML=hex;
    document.body.style.background=hex;
});