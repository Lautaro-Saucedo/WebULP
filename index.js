function cajita(caj1, caj2){
    caj2.innerHTML="";
    k=caj1[Math.floor(Math.random()*3)];
    caj2.appendChild(k);
}

//------------------------------------------------------------------
var x=0;
var y=0;
var px=9;
var py=4;
var arr;
var vinitosss=0;

function param(lab2){
    for (i=0;i<5;i++){
        for (j=0;j<10;j++){
            var k = document.createElement("p");
            k.innerText="#"
            lab2[i].appendChild(k);
        }
    }
    arr = [
        lab2[0].getElementsByTagName("p"),
        lab2[1].getElementsByTagName("p"),
        lab2[2].getElementsByTagName("p"),
        lab2[3].getElementsByTagName("p"),
        lab2[4].getElementsByTagName("p")
    ];
    arr[0][0].innerText="L";
    arr[4][9].innerText="P";
    vinito();
    
}

function vinito(){
    var x=0;
    var y=0;
    while (x==0 && y==0){
        x=Math.floor(Math.random()*10);
        y=Math.floor(Math.random()*5);
    }
    arr[y][x].innerText="V";
}

function puma(){
    var a = Math.floor(Math.random()*4);
    switch (a){
        case 0:{
            if (py!=0){
                arr[py][px].innerText="#";
                arr[--py][px].innerText="P";
            }
            break;
        }
        case 1:{
            if (py!=4){
                arr[py][px].innerText="#";
                arr[++py][px].innerText="P";
            }
            break;
        }
        case 2:{
            if (px!=0){
                arr[py][px].innerText="#";
                arr[py][--px].innerText="P";
            }
            break;
        }
        case 3:{
            if (px!=9){
                arr[py][px].innerText="#";
                arr[py][++px].innerText="P";
            }
            break;
        }
    }
}

function mover(a){
    switch(a){
        case 83:{
            if (y!=4 && arr[y+1][x].innerText == "V"){
                vinito();
                vinitosss++;
            }
            movers();
            break;
        }
        case 65:{
            if (x!=0 && arr[y][x-1].innerText == "V"){
                vinito();
                vinitosss++;
            }
            movera();
            break;
        }
        case 68:{
            if (x!=9 && arr[y][x+1].innerText == "V"){
                vinito();
                vinitosss++;
            }
            moverd();
            break;
        }
        case 87:{
            if (y!=0 && arr[y-1][x].innerText == "V"){
                vinito();
                vinitosss++;
            }
            moverw();
            break;
        }
    }
}

function moverw(){
    if (y!=0){
        arr[y][x].innerText="#";
        arr[--y][x].innerText="L";
    }
}

function movers(){
    if (y!=4){
        arr[y][x].innerText="#";
        arr[++y][x].innerText="L";
    }
}

function moverd(){
    if (x!=9){
        arr[y][x].innerText="#";
        arr[y][++x].innerText="L";
    }
}

function movera(){
    if (x!=0){
        arr[y][x].innerText="#";
        arr[y][--x].innerText="L";
    }
}

function autor(){
    if(vinitosss>=5){
        var a = document.createElement("div");
        var b =document.createElement("img");
        var c =document.createElement("h1");
        var d = document.createElement("p");
        var e = document.createElement("p");

        
        a.classList.add("asd");
        b.src="img/saucedo.webp";
        c.innerText="Milanga & Vinito Inc.";
        d.innerText="Powered by alambre and buenas intenciones.";
        e.innerText="Presione Escape para volver a esa pagina horrible.";

        document.body.appendChild(a);
        a.appendChild(b);
        a.appendChild(c);
        a.appendChild(d);
        a.appendChild(e);
        document.addEventListener('keydown', escape);
    }
}

function escape(e){
    if(e.key == "Escape"){
        document.body.removeChild(document.body.lastChild);
        document.removeEventListener('keydown',escape);
    }
}
