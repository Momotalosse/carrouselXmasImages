//------------------------------VARIABLES----------------------------------

let carrousel = document.getElementsByClassName("carrousel"); //-- Récupère la liste de toutes les images

let boutonGauche = document.getElementById("f1"); //-- Récupère 1ere fleche
let boutonDroite = document.getElementById("f2"); //-- Récupère 2nd fleche

let position0 = 0;
let position1 = 0;
let position2 = 0;
let position3 = 0;

let front = 0;
let back = 0;

let timeout;

//------------------------------FONCTIONS----------------------------------

function timerAvantRetourneCentre(){ //-- 3sec avant d'effectuer "retourneAuCentre()"
    timeout = setTimeout(retourneAuCentre, 600);
}

function retourneAuCentre() { //-- Place les images derière les autres au centre

    if(front == 1){
        position1 = 0;
        carrousel[0].style.transform = `translate(0px)`;
        carrousel[0].style.zIndex = "0";
    }

    if(front == 2){
        position2 = 0;
        carrousel[1].style.transform = `translate(0px)`;
        carrousel[1].style.zIndex = "0";
    }

    if(front == 3){
        position3 = 0;
        carrousel[2].style.transform = `translate(0px)`;
        carrousel[2].style.zIndex = "0";

    }

    if(front == 4){
        position0 = 0;
        carrousel[3].style.transform = `translate(0px)`;
        carrousel[3].style.zIndex = "0";

        front = 0; //--Pour avoir un carrousel infini ! 
    }
}



function goDroite() {

    if(front == 1){ //-- 1ere image passe dernière
        carrousel[0].style.zIndex = "3"; //
        carrousel[1].style.zIndex = "2";
        carrousel[3].style.zIndex = "1";

        if(position0 < 100){
            position0 += 3;
            carrousel[0].style.transform = `translate(${position0}vw)`;
            requestAnimationFrame(goDroite);
            timerAvantRetourneCentre();
            back = 3;
        }
    }   

    if(front == 2){ //-- 2e image passe dernière
        carrousel[0].style.zIndex = "1";
        carrousel[1].style.zIndex = "3"; //
        carrousel[2].style.zIndex = "2";

        if(position1 < 100){
            position1 += 3;
            carrousel[1].style.transform = `translate(${position1}vw)`;   
            requestAnimationFrame(goDroite);
            timerAvantRetourneCentre();
            back = 2;
        }
    }   

    if(front == 3){ //-- 3e image passe dernière
        carrousel[1].style.zIndex = "1";
        carrousel[2].style.zIndex = "3"; //
        carrousel[3].style.zIndex = "2";

        if(position2 < 100){
            position2 += 3;
            carrousel[2].style.transform = `translate(${position2}vw)`;   
            requestAnimationFrame(goDroite);
            timerAvantRetourneCentre();
            back = 1;
        }
    }   

    if(front == 4){ //-- 4e image passe dernière
        carrousel[0].style.zIndex = "2";
        carrousel[2].style.zIndex = "1";
        carrousel[3].style.zIndex = "3"; //

        if(position3 < 100){
            position3 += 3;
            carrousel[3].style.transform = `translate(${position3}vw)`;   
            requestAnimationFrame(goDroite);
            timerAvantRetourneCentre();
            back = 0;
        }
    }   

}


function goGauche() {

    if(back == 4){ //-- 1ere image se déplace au 1er plan
        carrousel[0].style.zIndex = "4"; //
        carrousel[1].style.zIndex = "3";
        carrousel[2].style.zIndex = "1";

        carrousel[0].style.transform = `translate(${position0}vw)`;

        if(position0 > 0){
            position0 += -3;
            carrousel[0].style.transform = `translate(${position0})vw)`;  
            requestAnimationFrame(goGauche);
            front = 0;
        }
    } 

    if(back == 3){ //-- 2e image se déplace au 1er plan
        carrousel[1].style.zIndex = "4"; //
        carrousel[3].style.zIndex = "1";
        carrousel[2].style.zIndex = "3";

        carrousel[1].style.transform = `translate(${position1}vw)`;

        if(position1 > 0){
            position1 += -3;
            carrousel[1].style.transform = `translate(${position1}vw)`;
            requestAnimationFrame(goGauche);
            front = 1;
        }
    } 

    if(back == 2){ //-- 3e image se déplace au 1er plan
        carrousel[1].style.zIndex = "1";
        carrousel[2].style.zIndex = "4"; //
        carrousel[3].style.zIndex = "3";
        

        carrousel[2].style.transform = `translate(${position2}vw)`;

        if(position2 > 0){
            position2 += -3;
            carrousel[2].style.transform = `translate(${position2}vw)`;
            requestAnimationFrame(goGauche);
            front = 2;
        }
    }

    if(back == 1){ //-- 4e image se déplace au 1er plan
        carrousel[0].style.zIndex = "3";
        carrousel[1].style.zIndex = "1";
        carrousel[3].style.zIndex = "4"; //

        carrousel[3].style.transform = `translate(${position3}vw)`;

        if(position3 > 0){
            position3 += -3;
            carrousel[3].style.transform = `translate(${position3}vw)`;
            requestAnimationFrame(goGauche);
            front = 3;
        }
    }
}


boutonDroite.addEventListener("click", function( event ) {

  front++; //-- Pour savoir à quelle diapo on est

    goDroite();
    
}
);


boutonGauche.addEventListener("click", function( event ) {

    if(position0 == 0){ //-- Au cas ou on commence par la gauche 
        position0 = 120;
    }            
                    
    if(position1 == 0){ // ^
        position1 = 120;
    }               

    if(position2 == 0){ // ^
        position2 = 120;
    }

    if(position3 == 0){ // ^
        position3 = 120;
    }

    back++; //-- Pour savoir à quelle diapo on est

    if(back == 5){ //-- Pour repartie à zéro après avoir défilé toutes les images
        back = 1;
    }

    goGauche();

}
);





































