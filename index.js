function sticky (stick){
    if (window.pageYOffset>=stick){
        topnav.classList.add("sticky");
    } else {
        topnav.classList.remove("sticky");
    }
}

//-------------------------------------------------------------------

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

function refresh(lab2){
    for (i=0;i<5;i++){
        lab2[i].innerText="";
    }
    for (i=0;i<5;i++){
        for (k=0;k<30;k++){
            lab2[i].innerText+=lab[i][k];
        }
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
    for (i=0;i<5;i++){
        for (k=0;k<30;k++){
            if (lab[i][k] == "a" && i!=0){
                lab[i][k]="#";
                lab[(i-1)][k]="a";
                return;
            }
        }
    }
}

function movers(){
    for (i=0;i<5;i++){
        for (k=0;k<30;k++){
            if (lab[i][k] == "a" && i!=4){
                lab[i][k]="#";
                lab[(i+1)][k]="a";
                return;
            }
        }
    }
}

function moverd(){
    for (i=0;i<5;i++){
        for (k=0;k<30;k++){
            if (lab[i][k] == "a" && k!=29){
                lab[i][k]="#";
                lab[i][k+1]="a";
                return;
            }
        }
    }
}

function movera(){
    for (i=0;i<5;i++){
        for (k=0;k<30;k++){
            if (lab[i][k] == "a" && k!=0){
                lab[i][k]="#";
                lab[i][k-1]="a";
                return;
            }
        }
    }
}
