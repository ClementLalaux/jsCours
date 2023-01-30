import { Contact } from './classes/Contact.js';
import { Voiture } from './classes/Voiture.js';
import { Vehicule } from './classes/Vehicule.js';

let clementBis = new Contact('clement','lalaux','5 octobre 1998','07 61 14 79 26','lalauxclement@gmail.com');

clementBis.toString();

let cont = document.querySelector('.container');


let voiture1 = new Voiture('BMW','serie 1',80);
let voiture2 = new Voiture('Mercedes','GLB',100);

let t = document.querySelector('.container');


t.innerHTML += voiture1.accelerer();
t.innerHTML += voiture1.accelerer();
t.innerHTML += voiture1.accelerer();
t.innerHTML += voiture1.accelerer();

t.innerHTML += voiture2.accelerer();
t.innerHTML += voiture2.accelerer();
t.innerHTML += voiture2.tourner();
t.innerHTML += voiture2.tourner();
