import Ihm from "./classes/Ihm.js";

const form_ajouter = document.getElementById('ajouterTodo');
const form_rechercher = document.getElementById('rechercherTodo');
const table = document.getElementById('table');

const ihm = new Ihm(form_rechercher,form_ajouter,table);
ihm.ajoutTodo(table);
ihm.rechercheTodo(table);