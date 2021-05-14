function cajita(caj1, caj2){
    caj2.innerHTML="";
    k=caj1[Math.floor(Math.random()*3)];
    caj2.appendChild(k);
}

//------------------------------------------------------------------

var lab = [
    "a#############################".split(""),
    "##############################".split(""),
    "##############################".split(""),
    "##############################".split(""),
    "##############################".split(""),
];
var x=0;
var y=0;

function limpiar(lab2){
    for (i=0;i<5;i++){
        lab2[i].innerText="";
    }
}

function refresh(lab2){
    limpiar(lab2);
    for (i=0;i<5;i++){
        lab2[i].innerText+= lab[i].join("");
    }
}

function mover(a){
    switch(a){
        case 83:{
            movers();
            break;
        }
        case 65:{
            movera();
            break;
        }
        case 68:{
            moverd();
            break;
        }
        case 87:{
            moverw();
            break;
        }
    }
}

function moverw(){
    if (y!=0){
        lab[y][x]="#";
        lab[--y][x]="a";
    }
}

function movers(){
    if (y!=4){
        lab[y][x]="#";
        lab[++y][x]="a";
    }
}

function moverd(){
    if (x!=29){
        lab[y][x]="#";
        lab[y][++x]="a";
    }
}

function movera(){
    if (x!=0){
        lab[y][x]="#";
        lab[y][--x]="a";
    }
}
