import { MotMystere } from './classes/MotMystere.js';

let mot = document.getElementById('mot-tiret');
let lettre = document.getElementById('lettre');
let click = document.getElementById('click');
let compteur = document.getElementById('nombre-essais');
let lettreUtilisees = document.getElementById('lettre-deja-tiret');

let motMystere = new MotMystere("teletravail");
motMystere.remplirTableau();
motMystere.afficherMotTiret(mot,compteur,lettreUtilisees);

motMystere.testerLettre(click,lettre,mot,compteur,lettreUtilisees)