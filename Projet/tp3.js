/*Fichier JS de l'application du Lab 3
Mise en forme du site web
Auteurs : 	
			XXXX Ana -  
			XXXX Jasper -
			WITTY Julien - 1949837
			THOLOT Cassandre - 2035978
Date de création : 30/10/19
Date de dernière modification : XX/11/19
*/

/*Initialisation de la page*/

$(document).ready(function(){
    //Affichage par défaut sur la page
    $('#toggle-details-icon').hide();
    $('#details').hide();
});

/* toogleMenuVisibility(toHide) : Fonction d'affichage/masquage
du menu dépliant entre tous les concurrents et leur regroupement.
// Paramètres :	toHide le nom de l'icône à masquer
Retour : 		void
*/ 
function toogleMenuVisibility(toHide) {
    if(toHide =='all'){
        // cacher l'icone toHide et le menu lié
        $('#toggle-all-icon').hide();
        $('#all').hide();
        // afficher l'autre
        $('#toggle-details-icon').show();
        $('#details').show();
    }else if(toHide == 'details'){
        // cacher l'icone toHide et le menu lié
        $('#toggle-details-icon').hide();
        $('#details').hide();
        // afficher l'autre
        $('#toggle-all-icon').show();
        $('#all').show();
    }
}

window.onload=function(){
var valueAlphaSlider=document.getElementById("slideralpha");
var outputAlpha=document.getElementById("outputAlpha");
var valueAllSlider=document.getElementById("sliderAll");
var outputAll=document.getElementById("outputAll");
var valueBetaSlider=document.getElementById("sliderBeta");
var outputBeta=document.getElementById("outputbeta");
var valueGammaSlider=document.getElementById("sliderGamma");
var outputGamma=document.getElementById("outputgamma");
var valueDeltaSlider=document.getElementById("sliderDelta");
var outputDelta=document.getElementById("outputdelta");
var valueEpsilonSlider=document.getElementById("sliderEpsilon");
var outputEpsilon=document.getElementById("outputepsilon");
var valueIotaSlider=document.getElementById("sliderIota");
var outputIota=document.getElementById("outputiota");
var valueThetaSlider=document.getElementById("sliderTheta");
var outputTheta=document.getElementById("outputtheta");
var valueKappaSlider=document.getElementById("sliderKappa");
var outputKappa=document.getElementById("outputkappa");

    valueAlphaSlider.oninput=function(){
        outputAlpha.innerHTML=this.value;
        outputAlpha.innerHTML+='%';
     
    }

    valueAllSlider.oninput=function(){
        outputAll.innerHTML=this.value;
        outputAll.innerHTML+='%';
     
    }
    valueBetaSlider.oninput=function(){
        outputBeta.innerHTML=this.value;
        outputBeta.innerHTML+='%';
     
    }

    valueGammaSlider.oninput=function(){
        outputGamma.innerHTML=this.value;
        outputGamma.innerHTML+='%';
     
    }
    valueDeltaSlider.oninput=function(){
        outputDelta.innerHTML=this.value;
        outputDelta.innerHTML+='%';
     
    }
    valueEpsilonSlider.oninput=function(){
        outputEpsilon.innerHTML=this.value;
        outputEpsilon.innerHTML+='%';
     
    }
    valueIotaSlider.oninput=function(){
        outputIota.innerHTML=this.value;
        outputIota.innerHTML+='%';
     
    }
   valueThetaSlider.oninput=function(){
        outputTheta.innerHTML=this.value;
        outputTheta.innerHTML+='%';
     
    }

    valueKappaSlider.oninput=function(){
        outputKappa.innerHTML=this.value;
        outputKappa.innerHTML+='%';
     
    }



};