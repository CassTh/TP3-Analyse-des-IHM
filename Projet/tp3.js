/*Fichier JS de l'application du Lab 3
Mise en forme du site web
Auteurs : 	
			DAOUDA Anassata - 2037655 
			AYOTTE-VELTMAN Jasper - 1907425
			WITTY Julien - 1949837
			THOLOT Cassandre - 2035978
Date de création : 30/10/19
Date de dernière modification : 16/11/19
*/

/*Initialisation de la page*/

$(document).ready(function () {
  //Affichage par défaut sur la page
  $('#toggle-details-icon').hide();
  $('#details').hide();
  $('#collapse').hide();
  document.getElementById("defaultTab").click();
});




function fullscreen(element) {
  var element = document.getElementById(element.id);
  element.classList.toggle("big");
  element.childNodes[3].classList.toggle("hide");
  var boxes = ["box1", "box2", "box3", "box4"];
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

  //Change tab color to show the selected one
  if (tab == 'Outputs') {
    $("#defaultTab").css("background-color", "#A9A9A9");
    $("#choicesTab").css("background-color", "#D3D3D3");
  } else if (tab == 'Choices') {
    $("#choicesTab").css("background-color", "#A9A9A9");
    $("#defaultTab").css("background-color", "#D3D3D3");
  }
}

/* toogleMenuVisibility(toHide) : Fonction d'affichage/masquage
du menu dépliant entre tous les concurrents et leur regroupement.
// Paramètres :	toHide le nom de l'icône à masquer
Retour : 		void
*/
function toggleMenuVisibility(toHide) {
  if (toHide == 'all') {
    // cacher l'icone toHide et le menu lié
    $('#toggle-all-icon').hide();
    $('#all').hide();
    // afficher l'autre
    $('#toggle-details-icon').show();
    $('#details').show();
    $('#collapse').show();
    $('#expand').hide();
  } else if (toHide == 'details') {
    // cacher l'icone toHide et le menu lié
    $('#toggle-details-icon').hide();
    $('#details').hide();
    // afficher l'autre
    $('#toggle-all-icon').show();
    $('#all').show();
    $('#expand').show();
    $('#collapse').hide();
  }
}

function toggleDarkMode() {
  var inputs = document.getElementById("inputs");
  inputs.classList.toggle("darkmode");

  var outputs = document.getElementById("outputs");
  outputs.classList.toggle("darkmode");
}

function fakeSave() {
  alert("Saved current state");
}

window.onload = function () {
  let sliders = document.getElementsByClassName("slider");
  let sliderOutputs = document.getElementsByClassName("slider-value");

  for (let i = 0; i < sliders.length; i++) {

    sliders[i].addEventListener('change', function () {
      let changeBaseline = sliders[i].id.substring(6, sliders[i].id.length) == "Alpha";
      randomizeCharts(changeBaseline);
      updateCharts();
    });

    sliders[i].addEventListener('input', function () {
      sliderOutputs[i].innerHTML = sliders[i].value + "%";
    });
  }

  let radioButtons = document.querySelectorAll("input[type=radio]");
  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('change', function () {
      let changeBaseline = radioButtons[i].id.substring(6, 11) == "alpha";
      randomizeCharts(changeBaseline);
      updateCharts();
    });
  }

  let checkboxes = document.querySelectorAll("input[type=checkbox]");
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', function () {
      randomizeCharts(true);
      randomizeCharts(false);
      updateCharts();
    });
  }

};