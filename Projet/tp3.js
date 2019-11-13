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


var valueAlphaSlider=document.getElementById("slideralpha");
var outputAlpha=document.getElementById("outputAlpha");
    valueAlphaSlider.oninput=function(){
        outputAlpha.innerHTML=this.value;
     
    }