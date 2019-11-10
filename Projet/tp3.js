

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
    document.getElementById("defaultTab").click();
  });
  
  


function fullscreen(element) {
  var element = document.getElementById(element.id);
  element.classList.toggle("big");
  var boxes = ["box1", "box2", "box3", "box4" ];
  boxes = boxes.filter(e => e !== element.id);
  for (i = 0; i < boxes.length; i++) {
      var otherElements = document.getElementById(boxes[i]);
      otherElements.classList.toggle("hide");
  } 
}

function openTab(evt, tab) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
}
	
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
