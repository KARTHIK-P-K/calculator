
let screen=document.getElementById("screen");
var buttons=document.querySelectorAll("button");
var screenValue="";

for(item of buttons){
    item.addEventListener("click",function(e){
        buttonText=e.target.innerText;
        console.log("button is",buttonText);

        if(buttonText=="C"){
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttonText=='='){
            screenValue=eval(screenValue);
            screen.value=screenValue;
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }

    })
}
