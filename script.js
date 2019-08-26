// Fonctionnalité 1
//Récupération du footer
var footerElt = document.getElementsByTagName("footer")[0];
//Initialisation du compteur de clics
var clickNumber = 0;
//Ajout de l'évènement click sur le footer
footerElt.addEventListener("click", function() {
    console.log("clic");
    console.log("clic numéro " + ++clickNumber);
});

// Fonctionnalité 2 
//Récupération de la navbarHeader
var menuElt = document.getElementById('navbarHeader');
//Récupération du bouton
var menuBtn = document.getElementsByClassName('navbar-toggler')[0];
//Ajout de l'évènement click sur le bouton
menuBtn.addEventListener("click", function() {
    menuElt.classList.toggle("collapse");
});

// Fonctionnalité 3
//Récupération la première card
var firstcard = document.getElementsByClassName('card')[0];
//Récupération du bouton de la première card
var firstcardBtn = firstcard.getElementsByClassName('btn-outline-secondary')[0];
//Modifier la couleur de la police
firstcardBtn.addEventListener('click', ChangeColorFirstCard)
function ChangeColorFirstCard() {
    firstcard.style.color = 'red';
}

// Fonctionnalité 4
//Récupération la deuxième card
var secondcard = document.getElementsByClassName('card')[1];
//Récupération du bouton de la deuxième card
var secondcardBtn = secondcard.getElementsByClassName('btn-outline-secondary')[0];
//Modifier la couleur de la police
secondcardBtn.addEventListener('click', ChangeColorSecondCard)
function ChangeColorSecondCard() {
    if (secondcard.style.color === 'green'){ 
        secondcard.style.color = '' ; 
    } else {
        secondcard.style.color = 'green';
    }
}

// Fonctionnalité 5
//Récupération de la navbar
var navbar = document.getElementsByTagName("header")[0];
var linkBootstrap = document.styleSheets[0]
var onNavbar = function(){
    if (document.styleSheets[0].disabled === true) {
    document.styleSheets[0].disabled = false;
  } else{
    document.styleSheets[0].disabled = true;
  }
}
navbar.addEventListener("dblclick", onNavbar);