var carr = document.querySelector("div.car");
var img = document.querySelectorAll(".car div");
var over = document.querySelectorAll(".overlay img");
var disp = document.querySelector("div.overlay");
var i = 0;
carr.innerHTML="";
disp.innerHTML="";
carr.appendChild(img[0]);

function sig(){
    carr.innerHTML="";
    if (i == 3){
        i=0;
    } else {
        i++
    }
    carr.appendChild(img[i]);
}

function ant(){
    carr.innerHTML="";
    if (i == 0){
        i=3;
    } else {
        i--
    }
    carr.appendChild(img[i]);
}

function on(){
    disp.style.display="block";
    disp.appendChild(over[i]);
}

function off(){
    disp.style.display="none";
    disp.removeChild(disp.firstChild);
}

